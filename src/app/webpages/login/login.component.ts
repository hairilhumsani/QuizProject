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

  user: User = new User("", "", "", "");
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
      .subscribe(data => {
        this.token = data.token

        if(this.toValidate(data.token) == 'true') 
        {this.router.navigate(['/admin'])}
        console.log(data)
      })
  }


  toValidate(token: String) : any
  {
    this.publicService.publicValidate(token).subscribe(
      data =>
      {
        console.log(data)
        return data;
      }
    )

  }

  toRegister() {
    this.router.navigate(["/register"]);
  }
}
