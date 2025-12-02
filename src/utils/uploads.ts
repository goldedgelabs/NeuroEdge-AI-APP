export async function uploadFile(file: File){
  const fd = new FormData()
  fd.append('file', file)
  const res = await fetch('/api/files/upload', { method:'POST', body: fd })
  return res.json()
}
