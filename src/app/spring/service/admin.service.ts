import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private usersUrl: string;

  constructor(private http: HttpClient) { this.usersUrl = "http://localhost:8081/api/admin" }
  
  getQuestions(token: any): Observable<any> {
    console.log(token + "inside aservie")
    let headers = new HttpHeaders({
      "Authorization" : token
    });
    //const headers = {'content-type': 'application/json'};
    return this.http.get(this.usersUrl + '/getQuestions', { 'headers': headers })
  }
}
