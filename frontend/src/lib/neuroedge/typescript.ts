
import axios from 'axios';
export default class TSClient {
  base: string;
  constructor(base: string) { this.base = base.replace(/\/$/, '') }
  async ping() { return axios.get(this.base + '/health').then(r=>r.data).catch(e=>{throw e}) }
  async runTask(name: string, payload: any) {
    return axios.post(this.base + '/api/run', { name, payload }).then(r=>r.data)
  }

  async get(path: string, params?: any) {
    try {
      const res = await (await import('axios')).default.get(this.base + path, { params });
      return res.data;
    } catch (e) {
      throw e;
    }
  }

  async post(path: string, body?: any) {
    try {
      const res = await (await import('axios')).default.post(this.base + path, body);
      return res.data;
    } catch (e) {
      throw e;
    }
  }
