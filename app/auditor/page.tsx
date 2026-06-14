"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link"; // NEW: Import Link

export default function AuditorInbox() {
  const { data: session } = useSession();
  const [sessions, setSessions] = useState<any[]>([]);
  const [selectedSession, setSelectedSession] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // NEW: State for the Director's note
  const [directorComment, setDirectorComment] = useState("");

  useEffect(() => {
    fetchLedger();
  }, []);

  const fetchLedger = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/ledger");
      const data = await res.json();
      setSessions(data || []);
      if (data && data.length > 0) setSelectedSession(data[0]);
    } catch (error) {
      console.error("Failed to load ledger", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResolve = async (action: "approve" | "deny") => {
    if (!selectedSession || directorComment.trim().length < 5) return;
    setIsProcessing(true);
    
    try {
      const res = await fetch("/api/ledger", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          session_id: selectedSession.session_id, 
          action,
          comment: directorComment // Passing the comment to the API
        })
      });

      if (res.ok) {
        const updatedSessions = sessions.filter(s => s.session_id !== selectedSession.session_id);
        setSessions(updatedSessions);
        setSelectedSession(updatedSessions.length > 0 ? updatedSessions[0] : null);
        setDirectorComment(""); // Clear the comment box for the next item
      }
    } catch (error) {
      console.error("Failed to resolve session", error);
    } finally {
      setIsProcessing(false);
    }
  };

  // Helper to extract the JSON payload whether it's named original_ai_data or extracted_cpt_codes
  const currentPayload = selectedSession?.extracted_codes || selectedSession?.original_ai_data || {};

  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 font-sans tracking-tight">
      <header className="flex items-center justify-between border-b border-zinc-800/80 p-6 bg-zinc-950">
        <div className="flex items-center gap-4">
          {/* NEW: Back Button */}
          <Link 
            href="/"
            className="mr-2 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-200 text-xs font-semibold rounded-full transition-all flex items-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Triage
          </Link>

          <div className="h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-zinc-100">Medical Director Inbox</h1>
            <p className="text-xs text-zinc-500 mt-0.5">Global Ledger • Pending Overrides</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="px-3 py-1 bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded-full text-xs font-bold">
            {sessions.length} Pending Review
          </span>
        </div>
      </header>

      <div className="flex h-[calc(100vh-89px)]">
        {/* LEFT SIDEBAR */}
        <div className="w-1/3 border-r border-zinc-800/80 bg-zinc-900/20 overflow-y-auto">
          {isLoading ? (
             <div className="p-8 text-center text-zinc-500 text-sm">Loading ledger...</div>
          ) : sessions.length === 0 ? (
            <div className="p-8 text-center text-zinc-500 text-sm">No pending overrides. Ledger is clear.</div>
          ) : (
            sessions.map((item) => {
              const rule = item.audit_details || "Clinical Review Required";
              const patientName = item.patient_mrn || "Unknown Patient";
              const timestamp = item.created_at ? new Date(item.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : "";
              
              return (
                <div 
                  key={item.session_id}
                  onClick={() => {
                    setSelectedSession(item);
                    setDirectorComment(""); // Reset comment when changing sessions
                  }}
                  className={`p-5 border-b border-zinc-800/50 cursor-pointer transition-colors ${selectedSession?.session_id === item.session_id ? 'bg-zinc-800/50 border-l-4 border-l-amber-500' : 'hover:bg-zinc-900/50 border-l-4 border-l-transparent'}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-zinc-200 truncate pr-2">{patientName}</h3>
                    <span className="text-[10px] text-zinc-500 flex-shrink-0">{timestamp}</span>
                  </div>
                  <div className="flex gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-zinc-800 text-zinc-400 text-[10px] rounded font-mono">
                      {item.session_id.split('-')[0]}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 truncate">{rule}</p>
                </div>
              )
            })
          )}
        </div>

        {/* RIGHT PANEL */}
        <div className="w-2/3 bg-zinc-950 p-8 overflow-y-auto">
          {!selectedSession ? (
            <div className="h-full flex items-center justify-center text-zinc-600">Select a session to review</div>
          ) : (
            <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 flex flex-col min-h-full">
              <h2 className="text-2xl font-bold mb-6">Review Override Request</h2>
              
              <div className="p-4 rounded-xl border bg-red-950/30 border-red-900/50 flex items-start gap-3 mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-400 mt-0.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"/></svg>
                <div>
                  <h4 className="text-red-400 font-bold text-sm uppercase tracking-wider mb-1">Policy / Clinical Alert</h4>
                  <p className="text-red-300/80 text-sm leading-relaxed">{selectedSession.audit_details || "High-Acuity ESI / Clinical Review Required"}</p>
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-6">
                <h4 className="text-zinc-400 text-xs uppercase tracking-widest font-bold mb-4">Clinical Context & Codes</h4>
                
                {/* NEW: Display the AI Clinical Reasoning */}
                {currentPayload.clinical_reasoning && (
                  <div className="bg-black/30 p-4 rounded-lg border border-black/20 mb-5">
                    <span className="text-indigo-400 font-bold text-[10px] uppercase tracking-wider block mb-1">AI Clinical Assessment</span>
                    <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap">{currentPayload.clinical_reasoning}</p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/20 p-3 rounded border border-black/10">
                    <span className="text-zinc-500 font-bold text-[10px] uppercase tracking-wider block mb-2">Requested CPT Codes</span>
                    <div className="flex gap-2 flex-wrap">
                      {Array.isArray(selectedSession.extracted_cpt_codes || currentPayload.proposed_cpt) && (selectedSession.extracted_cpt_codes || currentPayload.proposed_cpt).length > 0 ? (
                        (selectedSession.extracted_cpt_codes || currentPayload.proposed_cpt).map((code: string) => (
                          <span key={code} className="px-2 py-1 bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs rounded">{code}</span>
                        ))
                      ) : (
                        <span className="text-xs text-zinc-600">No CPT codes</span>
                      )}
                    </div>
                  </div>
                  <div className="bg-black/20 p-3 rounded border border-black/10">
                    <span className="text-zinc-500 font-bold text-[10px] uppercase tracking-wider block mb-2">Associated ICD-10</span>
                    <div className="flex gap-2 flex-wrap">
                      {Array.isArray(selectedSession.extracted_icd10_codes || currentPayload.proposed_icd10) && (selectedSession.extracted_icd10_codes || currentPayload.proposed_icd10).length > 0 ? (
                        (selectedSession.extracted_icd10_codes || currentPayload.proposed_icd10).map((code: string) => (
                          <span key={code} className="px-2 py-1 bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs rounded">{code}</span>
                        ))
                      ) : (
                        <span className="text-xs text-zinc-600">No ICD-10 codes</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* NEW: Justification Input Area */}
              <div className="bg-zinc-950/80 p-6 rounded-xl border border-zinc-800 mt-auto">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest block mb-3">Director's Resolution Note</label>
                <textarea
                  className="w-full h-24 bg-zinc-900/50 border border-zinc-700/50 rounded-lg px-4 py-3 text-sm text-zinc-200 focus:ring-1 focus:ring-amber-500/50 focus:border-amber-500 transition-all outline-none resize-none placeholder:text-zinc-600 mb-4"
                  placeholder="Enter clinical justification for approval, or reason for denial..."
                  value={directorComment}
                  onChange={(e) => setDirectorComment(e.target.value)}
                />
                
                <div className="flex gap-4">
                  <button 
                    onClick={() => handleResolve("deny")}
                    disabled={isProcessing || directorComment.trim().length < 5}
                    className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed text-zinc-200 font-bold text-sm rounded-lg transition-all w-1/3"
                  >
                    Deny / Cancel Order
                  </button>
                  <button 
                    onClick={() => handleResolve("approve")}
                    disabled={isProcessing || directorComment.trim().length < 5}
                    className="px-6 py-3 bg-amber-500 hover:bg-amber-400 disabled:bg-zinc-800 disabled:text-zinc-600 text-zinc-950 font-bold text-sm rounded-lg transition-all w-2/3 flex justify-center items-center gap-2"
                  >
                    {isProcessing ? "Processing..." : "Authorize Override & Clear Flag"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}