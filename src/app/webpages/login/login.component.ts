import { Component, OnInit } from '@angular/core';
import { PublicServiceService } from 'src/app/spring/service/public-service.service';
import { User } from '../../spring/model/user';
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


  addAccess(adding: string) {
    localStorage.setItem('access', adding);
  }



  login() {
    this.publicService.publicLogin(this.user)
      .subscribe(async data => {
        this.token = data.token


        if (await this.toValidate(data.token)) {
          this.router.navigate(['/admin'])
        }
      })
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
}
