export async function postToBackend(url: string, path: string, body: unknown, isForm=false) {
  const res = await fetch(url + path, {
    method: 'POST',
    headers: isForm ? undefined : { 'Content-Type': 'application/json' },
    body: isForm ? body : JSON.stringify(body),
  });
  if (!res.ok) throw new Error('Backend error ' + res.status);
  return res.json();
}
