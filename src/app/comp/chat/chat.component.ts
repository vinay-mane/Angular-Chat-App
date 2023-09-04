import { Component,OnInit } from '@angular/core';
import {ApiServiceService} from '../api-service.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  chats = [
    {'name':'Vinay','text':'wired vinay has 4 arms ','dt':'10:30'},
  ]

  constructor(private apiServiceService: ApiServiceService,private appComponent: AppComponent) {}

  getContactList_(auth: string,reciver: string) {
    this.apiServiceService.getMessageList(auth,reciver).subscribe(
      (response) => {
        this.chats=response.message
        // Handle the response here
      },
      (error) => {
        console.error('Error creating user', error);
        // Handle the error here
      }
    );
  }

  ngOnInit() {
    const runCodeEverySecond = () => {
      console.log(this.appComponent.reciver)
      this.getContactList_(this.appComponent.auth,this.appComponent.reciver)
      // Wait for 1 second (1000 milliseconds) before running again
      setTimeout(runCodeEverySecond, 2000);
    }
    runCodeEverySecond()
  }
}
