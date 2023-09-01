import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl = 'http://localhost:5500/'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getContactList(auth:string): Observable<any>{
    const data = { auth }; // Create an object with the username
    return this.http.post(`${this.apiUrl}contact_list`, data);
  }

  getMessageList(auth:string): Observable<any>{
    const data = { auth }; // Create an object with the username
    return this.http.post(`${this.apiUrl}contact_list`, data);
  }
}
