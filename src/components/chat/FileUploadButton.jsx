import React, { useRef } from 'react';
export default function FileUploadButton({onFiles}){ const ref=useRef(); const pick=()=> ref.current.click(); const handle=e=> onFiles && onFiles(Array.from(e.target.files || [])); return (<div><input ref={ref} type='file' multiple style={{display:'none'}} onChange={handle} /><button className='file-btn' onClick={pick}>📎</button></div>) }
