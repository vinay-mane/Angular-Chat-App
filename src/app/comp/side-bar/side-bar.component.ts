import { Component,OnInit  } from '@angular/core';
import {ApiServiceService} from '../api-service.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit{
  users = [
    {'name':'vinay'},
    {'name':'vinay'},
    {'name':'vinay'},
    {'name':'vinay'},
    {'name':'vinay'},
    {'name':'vinay'},
    {'name':'vinay'},
    {'name':'vinay'},
    {'name':'vinay'},
    {'name':'vinay'},
    {'name':'vinay'},
    {'name':'vinay'},
    {'name':'vinay'},
    {'name':'vinay'},
    {'name':'vinay'},
    {'name':'vinay'},
  ]
  constructor(private apiServiceService: ApiServiceService) {}

  getContactList_(auth: string) {
    this.apiServiceService.getContactList(auth).subscribe(
      (response) => {
        console.log('User created successfully', response);
        this.users=response
        // Handle the response here
      },
      (error) => {
        console.error('Error creating user', error);
        // Handle the error here
      }
    );
  }

  ngOnInit() {
    this.getContactList_('6dcc28b88dd0d327bf050146aed70022ea55bcd6dc92a2b68bc7e844c5d8755b81087da217ae62211ec7a6d0c09d46d5f29a61e1934b552cafe1057c415a43c3')
  }
}
