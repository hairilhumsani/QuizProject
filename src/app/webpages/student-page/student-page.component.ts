import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent implements OnInit {

  opened: boolean;

  constructor(

    private router : Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    if (confirm("Are you sure you want to logout?")) {
      this.router.navigate(['/login'])
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('username');
    }

  }

}
