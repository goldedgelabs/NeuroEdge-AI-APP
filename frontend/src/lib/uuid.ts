
export function uuid() {
  return 'id_' + Math.random().toString(36).slice(2,10);
}
