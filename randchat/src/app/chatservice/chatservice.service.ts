import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {

  data: any = [];
  constructor(private socket: Socket) {
    
  }

  sendMessage(msg: string) {
    this.socket.emit('chat message', msg);
  }
  getMessage() {
   return this.socket.fromEvent('chat message').pipe(map(data => data));
 // return this.data = this.socket.ioSocket.receiveBuffer;
  }
  getOnline(){
    return this.socket.fromEvent('online').pipe(map(data => data));
  }
  sendAdmin(msg:String){
    this.socket.emit('admin', msg);
  }
  getAdmin(){
    return this.socket.fromEvent('admin').pipe(map(data => data));
  }
}
