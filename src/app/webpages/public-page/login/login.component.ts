import { Component, OnInit } from '@angular/core';
import { PublicServiceService } from 'src/app/spring/service/public-service.service';
import { User } from '../../../spring/model/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User;
  token: string = "";

  constructor(

    private publicService: PublicServiceService,
    private router: Router,

  ) {



  }

  ngOnInit(): void {
  }

  login() {
    this.publicService.publicLogin(this.user)
      .subscribe(async data => {
        this.token = data.token
        if (await this.toValidate(data.token)) {
          sessionStorage.setItem('token', "ncs-" + data.token)
          sessionStorage.setItem('username', data.username)
          this.toDirect(data.role)
        }
      },error => {window.alert("Invalid Username or Password")}
      )
  }


  toValidate(token: String) {
    return new Promise(resolve => {
      setTimeout(() => {
        this.publicService.publicValidate("ncs-" + token).subscribe(
          data => {
            resolve(Boolean(data));
          }
        )
      })
    })


  }

  toRegister() {
    this.router.navigate(["/register"]);
  }

  toDirect(user : string)
  {
    switch (user)
    {
      case 'admin':
        this.router.navigate(['/admin'])
        break
      
      case 'student':
        this.router.navigate(['/student'])
        break

      case '':
        this.router.navigate(['/login'])
    }
  }
}
