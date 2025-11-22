import React from 'react';
export default function SendButton({ sending=false, generating=false, onClick, onCancel }){
  const btnClass = generating ? 'ne-send-btn cancel' : sending ? 'ne-send-btn sending' : 'ne-send-btn idle';
  return (<div className='ne-send-wrap'><div className='ne-send-ring' style={{display: generating || sending ? 'block' : 'none'}} /><button className={btnClass} onClick={generating? onCancel: onClick}>{generating? '✖' : sending? <div className='ne-spinner'/> : '➤'}</button></div>)
}
