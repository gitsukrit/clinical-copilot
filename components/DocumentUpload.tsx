"use client";

import { useState, DragEvent, ChangeEvent } from "react";

interface Props {
  onProcessStart: () => void;
  onSuccess: (data: any) => void;
  onError: (msg: string) => void;
  isAuthenticated: boolean;
}

export default function DocumentUpload({ onProcessStart, onSuccess, onError, isAuthenticated }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    
    onProcessStart(); 

    const formData = new FormData();
    // 1. We must use "file" to match what the Next.js API expects
    formData.append("file", file);

    try {
      // STEP 1: Secure Server-Side Document Extraction
      const extractRes = await fetch("/api/upload", {
        method: "POST",
        body: formData, 
      });

      if (!extractRes.ok) {
        throw new Error("Failed to extract document text securely.");
      }
      
      const extractData = await extractRes.json();
      const documentText = extractData.text;

      // STEP 2: Send extracted text to our secure Triage API
      const triageRes = await fetch("/api/triage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          tenant_id: "56d66db8-42da-4cb2-aea7-f91ae85f19f7",
          patient_data: {
            name: "Extracted from Document",
            history: "Extracted from Document",
            notes: documentText // The raw Markdown from MarkItDown
          },
          target_schema: {
            patient_name: "string",
            symptoms: "array of strings",
            medication_conflict: "boolean (Set to true if symptoms and medications trigger a high-risk conflict)",
            recommended_esi_level: "integer",
            safety_alerts: "array of objects containing: alert_type (UPPERCASE, max 3 words), severity (HIGH, MODERATE, LOW), description (Strict max 15 words. Direct clinical fact.), recommendation (Strict max 10 words. Action-oriented.), clinical_action_required (boolean)",
            clinical_summary: "string (Strict max 2 sentences. Bottom-line up front.)"
          }
        }),
      });

      if (!triageRes.ok) {
        throw new Error("Pipeline execution failed.");
      }

      const finalData = await triageRes.json(); 

      // Inject the secure session ID for the override logic
      if (finalData.payload && finalData.session_id) {
        finalData.payload.session_id = finalData.session_id;
      }

      onSuccess(finalData);
      
    } catch (error: any) {
      onError(error.message || "Network error during secure document processing.");
    }
  };

  return (
    <div className="p-6 bg-zinc-900/60 backdrop-blur-xl rounded-2xl border border-zinc-800/80 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold text-zinc-100 flex items-center gap-2 tracking-wide">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-400"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
          Document Scanner
        </h2>
        <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">PDF Parse API</span>
      </div>
      
      <div 
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer
          ${isDragging ? "border-indigo-500 bg-indigo-500/10" : "border-zinc-700 hover:border-zinc-600 bg-zinc-950/50"}`}
      >
        <input 
          type="file" 
          id="fileInput" 
          className="hidden" 
          onChange={handleFileSelect}
          accept=".pdf,.png,.jpg,.jpeg,.doc,.docx" 
        />
        <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center gap-3">
          {file ? (
            <>
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-inner">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <p className="text-emerald-400 text-sm font-medium tracking-wide truncate max-w-xs">{file.name}</p>
            </>
          ) : (
            <>
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 shadow-inner">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              </div>
              <p className="text-zinc-500 text-xs">Drag & drop PDF here,<br/>or click to browse</p>
            </>
          )}
        </label>
      </div>

      <button
        onClick={handleUpload}
        disabled={!file || !isAuthenticated}
        className="mt-4 w-full bg-indigo-600/90 border border-indigo-500 hover:bg-indigo-500 disabled:bg-zinc-800 disabled:border-zinc-800 disabled:text-zinc-600 text-white font-medium text-sm py-3 px-4 rounded-xl transition-all shadow-[0_0_15px_rgba(99,102,241,0.15)] active:scale-[0.98]"
      >
        {isAuthenticated ? "Process Document" : "Login to Process"}
      </button>
    </div>
  );
}