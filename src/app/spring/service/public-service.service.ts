import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicServiceService {

  private usersUrl : string;

  constructor(private http: HttpClient) {this.usersUrl = "http://localhost:8081/api/public" }
  
  publicLogin(user: User) : Observable<any>
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': 'Bearer szdp79a2kz4wh4frjzuqu4sz6qeth8m3',
    });
    //const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(user)
    console.log(body);
    return this.http.post(this.usersUrl + '/login',body,{'headers':headers})
  }
  




}
