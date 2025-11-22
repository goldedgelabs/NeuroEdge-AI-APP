import React, { useRef } from 'react';
import { useAssets } from '../../context/AssetsContext';
import { saveAsset } from '../../lib/idb';
export default function AssetUploader(){ const ref = useRef(); const { updateAsset } = useAssets(); const onPick = async e=>{ const f = e.target.files[0]; if(!f) return; const url = URL.createObjectURL(f); updateAsset('logo', url); await saveAsset('logo', url); alert('Logo uploaded (local)'); }; return (<div><input ref={ref} type='file' accept='image/*' style={{display:'none'}} onChange={onPick} /><button className='btn' onClick={()=> ref.current.click()}>Upload Logo</button></div>) }
