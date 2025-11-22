import { openDB } from 'idb';
export async function getDB(){ return openDB('neuroedge',1,{upgrade(db){ if(!db.objectStoreNames.contains('assets')) db.createObjectStore('assets'); if(!db.objectStoreNames.contains('convos')) db.createObjectStore('convos',{keyPath:'id',autoIncrement:true}) }}); }
export async function saveAsset(k,v){ const db=await getDB(); return db.put('assets',v,k); }
