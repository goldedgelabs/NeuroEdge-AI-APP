import { openDB } from 'idb'
export async function getDb(){ return openDB('neuroedge-db',1,{ upgrade(db){ if(!db.objectStoreNames.contains('outbox')) db.createObjectStore('outbox',{ keyPath:'id' }) } }) }
export async function addOutbox(item:any){ const db = await getDb(); const tx = db.transaction('outbox','readwrite'); tx.objectStore('outbox').add(item); await tx.done }
