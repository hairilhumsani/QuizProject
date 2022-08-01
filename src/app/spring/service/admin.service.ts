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
    let headers = new HttpHeaders({
      "Authorization" : token,
      'Content-Type': 'application/json'
    });
    //const headers = {'content-type': 'application/json'};
    return this.http.get(this.usersUrl + '/getQuestions', { 'headers': headers })
  }

  getQuestionsByCategory(token: any,category: string): Observable<any> {
    let headers = new HttpHeaders({
      "Authorization" : token
    });
    //const headers = {'content-type': 'application/json'};
    return this.http.get(this.usersUrl + '/getByCategory/' + category, { 'headers': headers })
  }

  getQuestionsById(token: any,id: number): Observable<any> {
    let headers = new HttpHeaders({
      "Authorization" : token
    });
    //const headers = {'content-type': 'application/json'};
    return this.http.get(this.usersUrl + '/getByQuestionId/' + id, { 'headers': headers })
  }

  updateQuestion(token: any,q: Question): Observable<any> {
    let headers = new HttpHeaders({
      "Authorization" : token,
      'Content-Type': 'application/json'
    });
    const body = JSON.stringify(q)
    //const headers = {'content-type': 'application/json'};
    return this.http.put(this.usersUrl + '/updateQuestion', body, { 'headers': headers })
  }

  addQuestion(token: any,q: Question): Observable<any> {
    let headers = new HttpHeaders({
      "Authorization" : token,
      'Content-Type': 'application/json'
    });
    const body = JSON.stringify(q)
    //const headers = {'content-type': 'application/json'};
    return this.http.post(this.usersUrl + '/addQuestion', body, { 'headers': headers })
  }

  deleteQuestion(token: any,id : number): Observable<any> {
    let headers = new HttpHeaders({
      "Authorization" : token
    });
    //const headers = {'content-type': 'application/json'};
    return this.http.delete(this.usersUrl + '/deleteQuestion/'+ id, { 'headers': headers })
  }
}
