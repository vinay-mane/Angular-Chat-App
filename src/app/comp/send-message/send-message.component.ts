import { Component } from '@angular/core';
import {ApiServiceService} from '../api-service.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent {

  inputValue: string = '';

  constructor(private apiServiceService: ApiServiceService,private appComponent: AppComponent) {}

  sendMessage(auth: string,reciver: string,message: string) {
    console.log('check')
    this.apiServiceService.sendMessage(auth,reciver,{message:message}).subscribe(
      (response) => {
        console.log(this.inputValue, response);
        // this.chats=response
        // Handle the response here
      },
      (error) => {
        console.error('Error creating user', error);
        // Handle the error here
      }
    );
  }

  send(){
    this.sendMessage(this.appComponent.auth,this.appComponent.reciver,this.inputValue)
    this.inputValue=''
  }

  ngOnInit() {
  }
  
}
