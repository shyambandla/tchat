import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {

  data: any = [];
  constructor(private socket: Socket) {
    socket.on("error",(res: any)=>{console.log(res)});
    socket.on("chat message",(data: any)=>{console.log(data)});
  }

  sendMessage(msg: string) {
    this.socket.emit('chat message', msg);
  }
  getMessage() {
   return this.socket.fromEvent('chat message').pipe(map(data => data));
 // return this.data = this.socket.ioSocket.receiveBuffer;
  }

  
}
