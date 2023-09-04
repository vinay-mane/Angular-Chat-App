import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBarComponent } from './comp/side-bar/side-bar.component';
import { ChatComponent } from './comp/chat/chat.component';
import { NavComponent } from './comp/nav/nav.component';
import { SendMessageComponent } from './comp/send-message/send-message.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ChatComponent,
    NavComponent,
    SendMessageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
