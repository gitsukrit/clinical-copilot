"use client";

import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import DocumentUpload from "../components/DocumentUpload";
import TriageForm from "../components/TriageForm";

export default function Home() {
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { data: session } = useSession();

  // HITL State
  const [status, setStatus] = useState<"approved" | "pending_human_review" | null>(null);
  //const [resumeUrl, setResumeUrl] = useState<string | null>(null);
  
  // NEW: State for the doctor's override justification
  const [overrideJustification, setOverrideJustification] = useState("");

  const handleProcessStart = () => {
    setIsProcessing(true);
    setError(null);
    setAnalysisResult(null);
    setStatus(null);
    //setResumeUrl(null);
    setOverrideJustification(""); // Reset justification on new scan
  };

  const handleProcessSuccess = (data: any) => {
    setIsProcessing(false);
    
    if (data.status === "pending_human_review") {
      setStatus("pending_human_review");
      setAnalysisResult(data.payload);
      //setResumeUrl(data.resume_url || data.resumeUrl);
    } else if (data.isValid) {
      setStatus("approved");
      setAnalysisResult(data.payload);
    } else {
      setError("Analysis returned an invalid format. Check n8n logs.");
    }
  };

  const handleProcessError = (msg: string) => {
    setIsProcessing(false);
    setError(msg);
  };

  // UPDATED: Now sends the doctor's typed justification back to n8n
  const handleApproveOverride = async () => {
    if (overrideJustification.trim().length < 10) return;
    
    setIsProcessing(true);
    try {
      // Calling our own Next.js backend instead of n8n directly
      const response = await fetch("/api/override", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tenant_id: "56d66db8-42da-4cb2-aea7-f91ae85f19f7",
          session_id: analysisResult.session_id || "00000000-0000-0000-0000-000000000000",
          justification: overrideJustification,
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
        
        {/* Header */}
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
          
          {/* LEFT COLUMN: Input Methods */}
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

          {/* RIGHT COLUMN: Unified Results Display */}
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

            {/* Human-In-The-Loop: gated behind authentication */}
            {status === "pending_human_review" && !isProcessing && analysisResult && (
              <div className="flex-1 rounded-2xl border border-amber-500/30 bg-zinc-900/40 backdrop-blur-xl flex flex-col relative shadow-[0_0_50px_rgba(245,158,11,0.05)] animate-in fade-in overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-amber-500 to-yellow-500" />

                <div className="p-8 flex-1 flex flex-col overflow-y-auto custom-scrollbar">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/20">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"/></svg>
                    </div>
                    <h3 className="text-amber-500 font-medium tracking-wide">Policy Violation / Manual Override Required</h3>
                  </div>
                  <p className="text-xs text-zinc-500 mb-6 ml-11 leading-relaxed">Pipeline execution halted by guardrails. Review the clinical alerts below and provide an attending justification to proceed.</p>

                  <div className="space-y-4 mb-8">
                    {analysisResult.safety_alerts?.map((alert: any, index: number) => (
                      <div key={index} className="p-4 rounded-xl border bg-amber-950/10 border-amber-900/30">
                        <div className="flex items-start gap-3 mb-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-black tracking-wider uppercase bg-amber-500/20 text-amber-400">{alert.severity}</span>
                          <h4 className="font-semibold text-zinc-200 text-sm leading-tight pt-0.5">{alert.alert_type?.replace(/_/g, ' ')}</h4>
                        </div>
                        <p className="text-xs text-zinc-400 mb-2">{alert.description}</p>
                        <p className="text-xs text-amber-500/80 font-medium bg-black/20 p-2 rounded inline-block">Action: {alert.recommendation}</p>
                      </div>
                    ))}
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

            {/* Standard Approved Output */}
            {status === "approved" && !isProcessing && analysisResult && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 h-full flex flex-col">
                <div className="p-8 bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/80 rounded-2xl shadow-2xl flex-1 flex flex-col">
                  
                  <div className="mb-8 border-b border-zinc-800 pb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 text-xs">✓</div>
                      <h2 className="text-2xl font-bold text-zinc-100">
                        Patient: <span className="text-indigo-400">{analysisResult.patient_id || analysisResult.patient_name}</span>
                      </h2>
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed bg-zinc-950/80 p-5 rounded-xl border border-zinc-800/80 shadow-inner">
                      {analysisResult.clinical_summary || "Guardrails execution completed. Review alerts below."}
                    </p>
                  </div>

                  <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Detected Safety Alerts</h3>
                  
                  <div className="space-y-4 overflow-y-auto pr-2 pb-4 flex-1">
                    {analysisResult.safety_alerts?.map((alert: any, index: number) => (
                      <div key={index} className={`p-5 rounded-xl border ${alert.severity === 'HIGH' ? 'bg-red-950/20 border-red-900/40' : alert.severity === 'MODERATE' ? 'bg-amber-950/20 border-amber-900/40' : 'bg-zinc-800/20 border-zinc-700/40'}`}>
                        <div className="flex items-start gap-3 mb-3">
                          <span className={`px-2.5 py-1 rounded-md text-[10px] font-black tracking-wider uppercase mt-0.5 ${alert.severity === 'HIGH' ? 'bg-red-500/20 text-red-400' : alert.severity === 'MODERATE' ? 'bg-amber-500/20 text-amber-400' : 'bg-zinc-700 text-zinc-300'}`}>{alert.severity}</span>
                          <h4 className="font-semibold text-zinc-200 text-sm leading-tight pt-0.5">{alert.alert_type?.replace(/_/g, ' ')}</h4>
                        </div>
                        <p className="text-xs text-zinc-400 mb-4 leading-relaxed">{alert.description}</p>
                        <div className="bg-black/40 p-4 rounded-lg border border-black/20">
                          <p className="text-xs text-zinc-300 leading-relaxed"><span className="text-indigo-400 font-bold mr-2 uppercase tracking-wide text-[10px]">Action Required:</span>{alert.recommendation}</p>
                        </div>
                      </div>
                    ))}
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