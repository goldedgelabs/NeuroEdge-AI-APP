'use client';
import React, { useRef } from 'react';

export default function FileUpload() {
  const ref = useRef<HTMLInputElement|null>(null);
  const onPick = () => ref.current?.click();
  const onChange = async (e: unknown) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const form = new FormData();
    form.append('file', file);
    await fetch('/api/files/upload', { method: 'POST', body: form });
    alert('Uploaded');
  };
  return (
    <div>
      <input type="file" ref={ref} className="hidden" onChange={onChange}/>
      <button onClick={onPick} className="px-3 py-2 border rounded">Upload File</button>
    </div>
  )
}
