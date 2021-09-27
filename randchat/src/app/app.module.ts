import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from 'ngx-clipboard';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { NgxLinkifyjsModule } from 'ngx-linkifyjs'
import { CookieModule } from 'ngx-cookie';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'http://ufify6xxxhjno4yinsbyyytlhpkwnf576latsjk4i4n7h46ftxg3hvid.onion', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClipboardModule,
    ModalModule,
    FormsModule
    , CookieModule.forRoot(), SocketIoModule.forRoot(config),
    NgxLinkifyjsModule.forRoot()
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
