import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/spring/model/user';
import { PublicServiceService } from 'src/app/spring/service/public-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  user: User = new User;
  constructor(
    private publicService: PublicServiceService,
    private router: Router,

  ) { 

    
  }

  ngOnInit(): void {
  }

  register() {
    this.publicService.publicRegister(this.user)
      .subscribe(data => {
        this.router.navigate(['/login'])
      })
  }

  cancel()
  {
    this.router.navigate(['/login'])
  }

}
