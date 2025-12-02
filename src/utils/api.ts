import axios from 'axios'

const tsBase = process.env.NEXT_PUBLIC_TS_BACKEND_URL
const pyBase = process.env.NEXT_PUBLIC_PY_BACKEND_URL
const goBase = process.env.NEXT_PUBLIC_GO_BACKEND_URL

export const api = axios.create()

export function tsUrl(path: string) {
  if (!tsBase) throw new Error('TS backend not configured')
  return `${tsBase}${path}`
}
export function pyUrl(path: string) {
  if (!pyBase) throw new Error('PY backend not configured')
  return `${pyBase}${path}`
}
export function goUrl(path: string) {
  if (!goBase) throw new Error('GO backend not configured')
  return `${goBase}${path}`
}
