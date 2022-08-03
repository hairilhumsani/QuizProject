import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) { this.usersUrl = "http://localhost:8081/api/public" }

  publicLogin(user: User): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    //const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(user)
    return this.http.post(this.usersUrl + '/login', body, { 'headers': headers })
  }

  publicRegister(user: User): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    //const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(user)
    return this.http.post(this.usersUrl + '/register', body, { 'headers': headers })
  }

  publicValidate(token: string) {
    let headers = new HttpHeaders({
      'Authorization' : token
    })
    return this.http.get(this.usersUrl + '/validate', { 'headers': headers })
  }

}
