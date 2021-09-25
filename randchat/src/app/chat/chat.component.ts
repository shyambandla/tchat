import {Component, OnInit,TemplateRef } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ChatserviceService } from '../chatservice/chatservice.service';
import { NgxLinkifyOptions } from 'ngx-linkifyjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatserviceService]
})
export class ChatComponent implements OnInit {
  
   options: NgxLinkifyOptions =
  {
   attributes: null,
   className: 'linkified',
   defaultProtocol: 'http',
   events: null,
   format: function (value, type) {
     return value;
   },
   formatHref: function (href, type) {
     return href;
   },
   ignoreTags: [],
   nl2br: false,
   tagName: 'a',
   target: {
     url: '_blank'
   },
   validate: true
 };
 



  modalRef!: BsModalRef;

  // chat part 
  msg: string='';

msgg: string ='heyy yo';

from:String="";

classs:String="mine";


  messeges:any=[];


  constructor(private modalService: BsModalService,private cookieService: CookieService,private router:Router,private chatService:ChatserviceService) { }
 

  ngOnInit(): void {
    console.log(
      this.cookieService.get("nick"));
this.from=this.cookieService.get("nick");
  /*    this.chatService
        .getMessage()
        .subscribe(msg => {
          this.msg = "1st "+msg;
          console.log(this.msg);
        });
        */

        this.chatService
        .getMessage()
        .subscribe((data: any) =>{ 
          this.parseMsg(data,false);
          
        });

       

  }

 

  

  urlPlacer(str:String){
    let match = str.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig);
    let final=str;
    if(match!=null){
    match.map(url=>{
        final=final.replace(url,"<a href=\""+url+"\" target=\"_BLANK\">"+url+"</a>")
    })
    return final;
  }
  else{
    return str;
  }
  }





  parseMsg(mmsg: any,fr:boolean){
     const val=JSON.parse(mmsg);
      var cls:String='';
      if(fr){
        cls="mine";
      }else{
        cls="yours"
      }
    
      var obj={
        classs:cls,
        msg:val.msg,
        user:val.from,
        color:val.color
      };
     this.messeges.push(obj);
     window.scrollTo(0,document.body.scrollHeight);

  }

  sendMsg(){
   // console.log(this.msgg);
   if(this.msgg!=''){
     
    const smsg={msg: this.msgg,from:this.from,color:this.cookieService.get("nick_color")}
    
    this.chatService.sendMessage(JSON.stringify(smsg));
    this.parseMsg(JSON.stringify(smsg),true);
    this.msgg='';

   }
 }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
 }

 getColor():String {
  var color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","  
  +  
  Math.floor(Math.random() * 255) + ")"; 
  return color;
 }


 getClass():String {

  return "mine messages";
 }


}
