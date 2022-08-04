import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  private usersUrl: string;
  constructor(private http: HttpClient) {

    this.usersUrl = "http://localhost:8081/api/student"

  }
  
  getQuestionsByCategory(token: any, category: string): Observable<any> {
    let headers = new HttpHeaders({
      "Authorization": token
    });
    //const headers = {'content-type': 'application/json'};
    return this.http.get(this.usersUrl + '/getByCategory/' + category, { 'headers': headers })
  }
}
