"use client";

import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import DocumentUpload from "../components/DocumentUpload";
import TriageForm from "../components/TriageForm";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client for Realtime Subscriptions
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Home() {
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { data: session } = useSession();

  const [status, setStatus] = useState<"approved" | "pending_human_review" | null>(null);
  const [overrideJustification, setOverrideJustification] = useState("");

  // SUPABASE REALTIME LISTENER
  useEffect(() => {
    // Only subscribe if we have an active session ID to listen to
    if (!analysisResult?.session_id) return;

    const channel = supabase
      .channel('session_updates')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'triage_sessions',
          filter: `id=eq.${analysisResult.session_id}`
        },
        (payload) => {
          const updatedSession = payload.new;
          
          // Instantly update UI if another user (e.g., Director) approves it in the DB
          if (updatedSession.status === 'approved_by_doctor') {
            setStatus('approved');
          } 
          // Instantly update UI if a background worker flags it
          else if (updatedSession.status === 'pending_human_review') {
            setStatus('pending_human_review');
          }
        }
      )
      .subscribe();

    // Cleanup subscription on unmount or when session_id changes
    return () => {
      supabase.removeChannel(channel);
    };
  }, [analysisResult?.session_id]);

  const handleProcessStart = () => {
    setIsProcessing(true);
    setError(null);
    setAnalysisResult(null);
    setStatus(null);
    setOverrideJustification(""); 
  };

  const handleProcessSuccess = (data: any) => {
    setIsProcessing(false);
    
    const clinicalData = data.payload ? data.payload : data;
    
    if (data.status === "pending_human_review" || clinicalData.requires_hitl === true) {
      setStatus("pending_human_review");
      setAnalysisResult(clinicalData);
    } 
    else if (clinicalData.esi_level !== undefined) {
      setStatus("approved");
      setAnalysisResult(clinicalData);

      // Trigger Auto-Approval Write-Back
      if (clinicalData.hpi_draft) {
        fetch("/api/history", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            patient_name: "Mark Smith",
            patient_mrn: "MRN-77892",
            hpi_draft: clinicalData.hpi_draft,
            icd10_codes: clinicalData.proposed_icd10
          })
        }).catch(err => console.error("Auto write-back failed:", err));
      }
    } else {
      setError("Analysis returned an invalid format. Check n8n logs.");
    }
  };

  const handleProcessError = (msg: string) => {
    setIsProcessing(false);
    setError(msg);
  };

  const handleApproveOverride = async () => {
    if (overrideJustification.trim().length < 10) return;
    
    setIsProcessing(true);
    try {
      const response = await fetch("/api/override", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tenant_id: "56d66db8-42da-4cb2-aea7-f91ae85f19f7",
          session_id: analysisResult.session_id || "00000000-0000-0000-0000-000000000000",
          justification: overrideJustification,
          hpi_draft: analysisResult.hpi_draft,
          icd10_codes: analysisResult.proposed_icd10,
          patient_name: "Mark Smith",
          patient_mrn: "MRN-77892"
        })
      });

      if (response.ok) {
        setStatus("approved");
      } else {
        const errData = await response.json();
        setError(`Failed to process override: ${errData.error}`);
      }
    } catch (error) {
      setError("Network error during override.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 font-sans tracking-tight overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="relative max-w-[1400px] mx-auto p-6 md:p-8">
        
        <header className="mb-8 flex items-center justify-between border-b border-zinc-800/80 pb-6">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.2)]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-zinc-100">Clinical Copilot</h1>
              <p className="text-sm text-zinc-500 mt-0.5">Guardrails API • Unified Pipeline</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 shadow-inner">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span>
              Tenant: 56d66db8-42da-4cb2-aea7-f91ae85f19f7
            </div>
            {!session ? (
              <button
                onClick={() => signIn()}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-full transition-all active:scale-[0.98]"
              >
                Physician Login
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <Link 
                  href="/auditor"
                  className="px-4 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/20 font-bold text-xs rounded-full transition-all active:scale-[0.98] flex items-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  Director Inbox
                </Link>

                <div className="w-px h-4 bg-zinc-800 mx-1"></div>

                <span className="text-xs text-zinc-400">Logged in as <span className="text-indigo-400 font-semibold">{session.user?.name}</span></span>
                <button
                  onClick={() => signOut()}
                  className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 font-medium text-xs rounded-full transition-all active:scale-[0.98]"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col gap-6">
            <DocumentUpload
              onProcessStart={handleProcessStart}
              onSuccess={handleProcessSuccess}
              onError={handleProcessError}
              isAuthenticated={!!session}
            />
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-zinc-800/80"></div>
              <span className="flex-shrink-0 mx-4 text-zinc-600 text-[10px] uppercase tracking-widest font-bold">Or enter manually</span>
              <div className="flex-grow border-t border-zinc-800/80"></div>
            </div>
            <TriageForm
              onProcessStart={handleProcessStart}
              onSuccess={handleProcessSuccess}
              onError={handleProcessError}
              isAuthenticated={!!session}
            />
          </div>

          <div className="lg:col-span-8 xl:col-span-8 h-full min-h-[600px] flex flex-col">
            
            {!isProcessing && !analysisResult && !error && (
              <div className="flex-1 rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/20 flex flex-col items-center justify-center p-12 text-center backdrop-blur-sm">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center mb-6 shadow-inner">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-zinc-500"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                </div>
                <h3 className="text-zinc-200 font-semibold text-lg mb-2">Awaiting Intake Data</h3>
                <p className="text-zinc-500 text-sm max-w-md leading-relaxed">Upload a referral PDF or enter triage notes manually on the left to evaluate against hospital policy and clinical guardrails.</p>
              </div>
            )}

            {isProcessing && (
              <div className="flex-1 rounded-2xl border border-indigo-500/20 bg-zinc-900/40 backdrop-blur-xl flex flex-col items-center justify-center p-8 relative overflow-hidden shadow-[0_0_40px_rgba(99,102,241,0.05)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-transparent animate-pulse" />
                <div className="relative flex flex-col items-center">
                  <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-6" />
                  <p className="text-indigo-400 text-sm font-semibold tracking-wide uppercase">Executing Guardrails Pipeline...</p>
                  <p className="text-zinc-500 text-xs mt-2">Evaluating clinical rules engine.</p>
                </div>
              </div>
            )}

            {error && !isProcessing && (
              <div className="flex-1 bg-red-950/20 border border-red-900/50 text-red-400 p-8 rounded-2xl backdrop-blur-xl flex flex-col items-center justify-center text-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mb-4"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                <h3 className="text-lg font-bold mb-2">Pipeline Error</h3>
                <p className="text-sm text-red-400/80">{error}</p>
              </div>
            )}

            {status === "pending_human_review" && !isProcessing && analysisResult && (
              <div className="flex-1 rounded-2xl border border-amber-500/30 bg-zinc-900/40 backdrop-blur-xl flex flex-col relative shadow-[0_0_50px_rgba(245,158,11,0.05)] animate-in fade-in overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-amber-500 to-yellow-500" />

                <div className="p-8 flex-1 flex flex-col overflow-y-auto custom-scrollbar">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/20">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"/></svg>
                    </div>
                    <h3 className="text-amber-500 font-medium tracking-wide">High-Acuity or Policy Violation / Manual Override Required</h3>
                  </div>
                  <p className="text-xs text-zinc-500 mb-6 ml-11 leading-relaxed">Pipeline execution halted by guardrails. Review the clinical assessment below and provide an attending justification to proceed.</p>

                  <div className="space-y-4 mb-8">
                    {analysisResult.rule_description && (
                      <div className="p-4 rounded-xl border bg-red-950/30 border-red-900/50 flex items-start gap-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-400 mt-0.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"/></svg>
                        <div>
                          <h4 className="text-red-400 font-bold text-sm uppercase tracking-wider mb-1">Billing Policy Conflict</h4>
                          <p className="text-red-300/80 text-xs leading-relaxed">{analysisResult.rule_description}</p>
                        </div>
                      </div>
                    )}

                    <div className="p-4 rounded-xl border bg-amber-950/10 border-amber-900/30">
                      <div className="flex items-start gap-3 mb-4">
                        <span className="px-2 py-0.5 rounded text-[10px] font-black tracking-wider uppercase bg-amber-500/20 text-amber-400">ESI Level {analysisResult.esi_level}</span>
                        <h4 className="font-semibold text-zinc-200 text-sm leading-tight pt-0.5">Triage Copilot Assessment</h4>
                      </div>

                      {analysisResult.hpi_draft && (
                        <div className="bg-indigo-950/20 p-5 rounded-xl border border-indigo-900/30 mb-5 relative group">
                          <h4 className="flex items-center gap-2 text-indigo-400 text-[10px] uppercase tracking-widest font-bold mb-3">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                            Auto-Drafted History of Present Illness (HPI)
                          </h4>
                          <p className="text-sm text-zinc-300 leading-relaxed font-serif">{analysisResult.hpi_draft}</p>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(analysisResult.hpi_draft);
                              alert("HPI copied to clipboard!");
                            }}
                            className="absolute top-4 right-4 p-2 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 rounded-lg opacity-0 group-hover:opacity-100 transition-all active:scale-95"
                            title="Copy to Clipboard"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                          </button>
                        </div>
                      )}

                      <p className="text-xs text-zinc-400 mb-4 leading-relaxed whitespace-pre-wrap"><strong>Clinical Reasoning:</strong>{"\n"}{analysisResult.clinical_reasoning}</p>
                      
                      {analysisResult.differential_diagnoses && analysisResult.differential_diagnoses.length > 0 && (
                        <div className="bg-black/20 p-4 rounded-xl border border-black/10 mb-4">
                          <h4 className="flex items-center gap-2 text-zinc-400 text-[10px] uppercase tracking-widest font-bold mb-4">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h4l2-9 5 18 2-9h5"/></svg>
                            Top Differential Diagnoses
                          </h4>
                          <div className="space-y-3">
                            {analysisResult.differential_diagnoses.map((dx: any, i: number) => (
                              <div key={i} className="flex gap-3 items-start">
                                <div className="w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-[10px] font-bold border border-indigo-500/20 shrink-0 mt-0.5">
                                  {i + 1}
                                </div>
                                <div>
                                  <h5 className="text-zinc-200 text-xs font-bold">{dx.condition}</h5>
                                  <p className="text-zinc-500 text-[11px] leading-relaxed mt-0.5">{dx.rationale}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-black/20 p-3 rounded border border-black/10">
                          <span className="text-zinc-500 font-bold text-[10px] uppercase tracking-wider block mb-2">Requested CPT Codes</span>
                          <div className="flex gap-2 flex-wrap">
                            {analysisResult.proposed_cpt?.map((code: string) => (
                              <span key={code} className="px-2 py-1 bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs rounded">{code}</span>
                            ))}
                          </div>
                        </div>
                        <div className="bg-black/20 p-3 rounded border border-black/10">
                          <span className="text-zinc-500 font-bold text-[10px] uppercase tracking-wider block mb-2">Associated ICD-10</span>
                          <div className="flex gap-2 flex-wrap">
                            {analysisResult.proposed_icd10?.map((code: string) => (
                              <span key={code} className="px-2 py-1 bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs rounded">{code}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-950/80 p-6 rounded-xl border border-zinc-800 mt-auto">
                    <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest block mb-3">Clinical Justification for Override</label>
                    <textarea
                      className="w-full h-24 bg-zinc-900/50 border border-zinc-700/50 rounded-lg px-4 py-3 text-sm text-zinc-200 focus:ring-1 focus:ring-amber-500/50 focus:border-amber-500 transition-all outline-none resize-none placeholder:text-zinc-600 mb-4"
                      placeholder="E.g., Patient has been stable on this combination for 3 years without renal impairment. Benefit outweighs theoretical risk."
                      value={overrideJustification}
                      onChange={(e) => setOverrideJustification(e.target.value)}
                    />
                    <button
                      onClick={handleApproveOverride}
                      disabled={isProcessing || overrideJustification.trim().length < 10}
                      className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-zinc-800 disabled:text-zinc-600 text-zinc-950 font-bold text-sm py-3.5 rounded-lg transition-all active:scale-[0.98]"
                    >
                      {overrideJustification.trim().length < 10 ? "Enter justification to authorize..." : "Authorize Override & Sign"}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {status === "approved" && !isProcessing && analysisResult && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 h-full flex flex-col">
                <div className="p-8 bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/80 rounded-2xl shadow-2xl flex-1 flex flex-col">
                  
                  <div className="mb-8 border-b border-zinc-800 pb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 text-xs">✓</div>
                      <h2 className="text-2xl font-bold text-zinc-100">
                        Copilot Triage Assessment
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-4 overflow-y-auto pr-2 pb-4 flex-1">
                    <div className="p-5 rounded-xl border bg-zinc-800/20 border-zinc-700/40">
                      <div className="flex items-start gap-3 mb-4">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-black tracking-wider uppercase mt-0.5 bg-indigo-500/20 text-indigo-400">ESI Level {analysisResult.esi_level}</span>
                        <h4 className="font-semibold text-zinc-200 text-sm leading-tight pt-0.5">
                          {overrideJustification.trim().length > 0 ? "Manually Overridden by Physician" : "Auto-Approved via Guardrails"}
                        </h4>
                      </div>

                      {analysisResult.hpi_draft && (
                        <div className="bg-indigo-950/20 p-5 rounded-xl border border-indigo-900/30 mb-5 relative group">
                          <h4 className="flex items-center gap-2 text-indigo-400 text-[10px] uppercase tracking-widest font-bold mb-3">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                            Auto-Drafted History of Present Illness (HPI)
                          </h4>
                          <p className="text-sm text-zinc-300 leading-relaxed font-serif">{analysisResult.hpi_draft}</p>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(analysisResult.hpi_draft);
                              alert("HPI copied to clipboard!");
                            }}
                            className="absolute top-4 right-4 p-2 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 rounded-lg opacity-0 group-hover:opacity-100 transition-all active:scale-95"
                            title="Copy to Clipboard"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                          </button>
                        </div>
                      )}

                      <p className="text-xs text-zinc-400 mb-4 leading-relaxed whitespace-pre-wrap"><strong>Clinical Reasoning:</strong>{"\n"}{analysisResult.clinical_reasoning}</p>

                      {analysisResult.differential_diagnoses && analysisResult.differential_diagnoses.length > 0 && (
                        <div className="bg-black/20 p-4 rounded-xl border border-black/10 mb-4">
                          <h4 className="flex items-center gap-2 text-zinc-400 text-[10px] uppercase tracking-widest font-bold mb-4">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h4l2-9 5 18 2-9h5"/></svg>
                            Top Differential Diagnoses
                          </h4>
                          <div className="space-y-3">
                            {analysisResult.differential_diagnoses.map((dx: any, i: number) => (
                              <div key={i} className="flex gap-3 items-start">
                                <div className="w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-[10px] font-bold border border-indigo-500/20 shrink-0 mt-0.5">
                                  {i + 1}
                                </div>
                                <div>
                                  <h5 className="text-zinc-200 text-xs font-bold">{dx.condition}</h5>
                                  <p className="text-zinc-500 text-[11px] leading-relaxed mt-0.5">{dx.rationale}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-black/20 p-3 rounded border border-black/10">
                          <span className="text-zinc-500 font-bold text-[10px] uppercase tracking-wider block mb-2">Requested CPT Codes</span>
                          <div className="flex gap-2 flex-wrap">
                            {analysisResult.proposed_cpt?.map((code: string) => (
                              <span key={code} className="px-2 py-1 bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs rounded">{code}</span>
                            ))}
                          </div>
                        </div>
                        <div className="bg-black/20 p-3 rounded border border-black/10">
                          <span className="text-zinc-500 font-bold text-[10px] uppercase tracking-wider block mb-2">Associated ICD-10</span>
                          <div className="flex gap-2 flex-wrap">
                            {analysisResult.proposed_icd10?.map((code: string) => (
                              <span key={code} className="px-2 py-1 bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs rounded">{code}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </main>
  );
}