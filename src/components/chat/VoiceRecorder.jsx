import React, { useEffect, useRef, useState } from 'react';
export default function VoiceRecorder({onTranscribe}){
  const [recording,setRecording]=useState(false);
  const mediaRef=useRef();
  const streamRef=useRef();
  useEffect(()=>{ return ()=>{ if(streamRef.current){ streamRef.current.getTracks().forEach(t=>t.stop()); streamRef.current=null } } },[]);
  const start=async ()=>{ try{ const s=await navigator.mediaDevices.getUserMedia({audio:true}); streamRef.current=s; const mr=new MediaRecorder(s); const chunks=[]; mediaRef.current=mr; mr.ondataavailable = e=> chunks.push(e.data); mr.onstop=()=>{ const blob = new Blob(chunks,{type:'audio/webm'}); setTimeout(()=> onTranscribe && onTranscribe('Mock transcription: recorded audio'),500); }; mr.start(); setRecording(true);}catch(e){ alert('Microphone access denied'); } };
  const stop=()=>{ if(mediaRef.current) mediaRef.current.stop(); if(streamRef.current){ streamRef.current.getTracks().forEach(t=>t.stop()); streamRef.current=null } setRecording(false); };
  return (<div>{recording? <button className='voice-btn' onClick={stop}>■</button> : <button className='voice-btn' onClick={start}>🎤</button>} {recording && <div className='ne-wave' aria-hidden><span></span><span></span><span></span><span></span><span></span></div>}</div>)
}
