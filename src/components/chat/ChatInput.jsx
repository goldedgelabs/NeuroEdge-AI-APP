import React, { useRef, useState } from 'react';
import FileUploadButton from './FileUploadButton';
import VoiceRecorder from './VoiceRecorder';
import SendButton from './SendButton';
import { sendMessage, uploadFiles } from '../../lib/api';
import { useAssets } from '../../context/AssetsContext';

export default function ChatInput({ onSend }) {
  const [text,setText]=useState('');
  const [sending,setSending]=useState(false);
  const [generating,setGenerating]=useState(false);
  const controllerRef=useRef();
  const { setUploadedFiles } = useAssets ? useAssets() : { setUploadedFiles:()=>{} };

  const handleFiles= async (files)=>{ const uploaded = await uploadFiles(files); setUploadedFiles && setUploadedFiles(prev=> [...prev,...uploaded]); };
  const handleTranscribe = (t)=> setText(prev => prev? prev + ' ' + t : t);

  const send = async ()=>{
    if(!text.trim()) return;
    setSending(true);
    controllerRef.current = new AbortController();
    try{
      await sendMessage(text,{ signal: controllerRef.current.signal, onToken: ()=>{} });
      setGenerating(true);
      await new Promise((res,rej)=>{ const id = setTimeout(()=> res(),1200); controllerRef.current.signal.addEventListener('abort', ()=> { clearTimeout(id); rej(new DOMException('Aborted','AbortError')); }); });
      onSend && onSend(text);
      setText('');
    }catch(e){ console.log('send err', e); }
    setSending(false); setGenerating(false); controllerRef.current = null;
  };
  const cancel = ()=>{ if(controllerRef.current) controllerRef.current.abort(); setGenerating(false); setSending(false); controllerRef.current = null; };

  return (<><div className='composer' role='region' aria-label='Message composer'><FileUploadButton onFiles={handleFiles} /><VoiceRecorder onTranscribe={handleTranscribe} /><textarea className='input-field' value={text} onChange={e=> setText(e.target.value)} placeholder='Ask NeuroEdge anything...' onKeyDown={e=> { if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); send(); } }} /><SendButton sending={sending} generating={generating} onClick={send} onCancel={cancel} /></div><div className='warning'>⚠️ NeuroEdge can make mistakes. Check important info.</div></>)
}
