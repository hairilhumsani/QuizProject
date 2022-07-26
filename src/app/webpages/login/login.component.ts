import { Component, OnInit } from '@angular/core';
import { PublicServiceService } from 'src/app/spring/service/public-service.service';
import { User } from '../../spring/model/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user : User = new User;

  constructor(private publicService : PublicServiceService) { }

  ngOnInit(): void {
  }


  addAccess(adding: string) {
    localStorage.setItem('access',adding);
  }

  login() {
    this.publicService.publicLogin(this.user)
      .subscribe(data => {
        console.log(data)
      })      
  }



}
