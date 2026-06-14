"use client";

import { useState } from "react";

interface Props {
  onProcessStart: () => void;
  onSuccess: (data: any) => void;
  onError: (msg: string) => void;
  isAuthenticated: boolean;
}

export default function TriageForm({ onProcessStart, onSuccess, onError, isAuthenticated }: Props) {
  const [patientData, setPatientData] = useState({
    mrn: "MRN-77892",
    name: "",
    history: "",
    notes: ""
  });
  
  const [isFetchingEHR, setIsFetchingEHR] = useState(false);
  const [ehrError, setEhrError] = useState("");

  const handleMRNLookup = async () => {
    if (!patientData.mrn.trim()) return;
    
    setIsFetchingEHR(true);
    setEhrError("");
    
    try {
      const response = await fetch(`/api/patient?mrn=${patientData.mrn.trim()}`);
      if (!response.ok) throw new Error("MRN Not Found");
      
      const data = await response.json();
      setPatientData(prev => ({
        ...prev,
        name: data.name,
        history: `Conditions: ${data.conditions.join(", ")} | Meds: ${data.active_medications.join(", ")}`
      }));
    } catch (error) {
      setEhrError("Record not found.");
      // We no longer wipe the name/history fields here so you can type in new patient data manually
    } finally {
      setIsFetchingEHR(false);
    }
  };

  const handleEvaluate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientData.notes.trim() || !patientData.name) return;

    onProcessStart();

    try {
      const response = await fetch("/api/triage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          tenant_id: "56d66db8-42da-4cb2-aea7-f91ae85f19f7",
          patient_data: {
            name: patientData.name.trim(),
            history: patientData.history.trim(),
            notes: patientData.notes.trim()
          }
        }),
      });

      if (!response.ok) throw new Error("Server error");
      const data = await response.json(); 

      if (data.payload && data.session_id) {
        data.payload.session_id = data.session_id;
      }

      onSuccess(data); 
    } catch (error) {
      onError("Connection failed. Is the Next.js server running?");
    }
  };

  return (
    <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/80 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold text-zinc-100 flex items-center gap-2 tracking-wide">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-400"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
          Manual Triage Entry
        </h2>
        <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">EHR Connected</span>
      </div>

      <form onSubmit={handleEvaluate} className="flex flex-col gap-4">
        
        {/* ROW 1: MRN and Name Side-by-Side */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider pl-1 flex justify-between items-center">
              <span>Patient MRN</span>
              {isFetchingEHR && <span className="text-indigo-400 text-[9px]">Fetching...</span>}
              {ehrError && <span className="text-red-400 text-[9px]">{ehrError}</span>}
            </label>
            <input 
              type="text" 
              className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-3 py-2.5 text-sm text-zinc-200 focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all outline-none placeholder:text-zinc-700 shadow-inner"
              placeholder="e.g., MRN-77892"
              value={patientData.mrn} 
              onChange={e => setPatientData({...patientData, mrn: e.target.value})}
              onBlur={handleMRNLookup} 
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider pl-1">Patient Name</label>
            <input 
              type="text" 
              className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-3 py-2.5 text-sm text-zinc-200 focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all outline-none placeholder:text-zinc-700 shadow-inner"
              value={patientData.name} 
              placeholder="Enter patient name"
              onChange={e => setPatientData({...patientData, name: e.target.value})}
            />
          </div>
        </div>

        {/* ROW 2: Full-Width EHR History Textarea */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider pl-1">EHR History & Meds</label>
          <textarea 
            className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-3 py-2 text-sm text-zinc-200 focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all outline-none resize-none placeholder:text-zinc-700 shadow-inner leading-relaxed"
            value={patientData.history} 
            placeholder="Enter conditions and active medications" 
            rows={2}
            onChange={e => setPatientData({...patientData, history: e.target.value})}
          />
        </div>

        {/* ROW 3: Intake Notes */}
        <div className="space-y-1.5 flex-1">
          <label className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider pl-1">Intake Notes</label>
          <textarea 
            className="w-full h-24 bg-zinc-950/80 border border-zinc-800 rounded-xl px-3 py-2.5 text-sm text-zinc-200 focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all outline-none resize-none placeholder:text-zinc-700 shadow-inner leading-relaxed"
            value={patientData.notes} 
            onChange={e => setPatientData({...patientData, notes: e.target.value})} 
          />
        </div>
        
        <button type="submit"
            disabled={!isAuthenticated || !patientData.name}
            className="w-full mt-1 bg-zinc-800/80 border border-zinc-700 text-zinc-200 hover:text-white font-medium text-sm py-3 rounded-xl hover:bg-zinc-700 hover:border-zinc-600 disabled:bg-zinc-800 disabled:border-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed transition-all active:scale-[0.98]">
          {isAuthenticated ? "Enforce Guardrails" : "Login to Process"}
        </button>
      </form>
    </div>
  );
}