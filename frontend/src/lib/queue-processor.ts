import { getQueueItems, removeQueueItem } from './offline-db';

export async function processLocalQueue(baseUrl:string) {
  const items = await getQueueItems();
  for (const it of items) {
    try {
      const res = await fetch(baseUrl + '/v1/chat', { method: 'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify(it.payload) });
      if (res.ok) await removeQueueItem(it.id);
    } catch (e) {
      // keep for later
    }
  }
}

// Auto-added missing named export
export const processLocalQueue = (null as any);
