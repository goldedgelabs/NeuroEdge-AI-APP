export class WSClient {
  url: string;
  constructor(url: string){ this.url = url; }
  on(event: string, cb: any){}
  send(data: any){}
  close(){}
}
export default WSClient;
