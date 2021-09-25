import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nname: string | undefined ;

  modalRef!: BsModalRef;
  constructor(private modalService: BsModalService,private cookieService:CookieService,private _router: Router) {}

  getCookie(key: string){
    return this.cookieService.get(key);
  }
  putCookie(key: string,value:string){
    this.cookieService.put(key,value);
  }
  openModal(template: TemplateRef<any>) {
     this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
  }

  getRandomColor(): string{
    var color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","  
    +  
    Math.floor(Math.random() * 255) + ")";  
    return color;
  }
 
  onNick(): void {
    if(this.nname){
      this.nname=this.nname;
      console.log(this.nname);
      this.putCookie("nick",this.nname+this.makeid())
      this.putCookie("nick_color",this.getRandomColor());
      console.log(this.getCookie("nick"));
      this.modalRef.hide()
      this._router.navigate(['chat'])
    }
  }
  makeid(): String {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 3; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return "_"+text;
  }
}
