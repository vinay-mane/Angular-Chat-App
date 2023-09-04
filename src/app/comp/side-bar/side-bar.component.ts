import { Component,OnInit  } from '@angular/core';
import {ApiServiceService} from '../api-service.service';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit{
  users = [
    {'name':''},
    {'email':''},
  ]
  constructor(private apiServiceService: ApiServiceService,private appComponent: AppComponent) {}

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

  setReciver(user:string){
    this.appComponent.reciver=user
  }

  ngOnInit() {
    this.getContactList_(this.appComponent.auth)
  }
}
