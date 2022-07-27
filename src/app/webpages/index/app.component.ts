import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(

    private router: Router
  ) { }
  ngOnInit(): void {
    this.checkAccess();
  }
  title = 'QuizProject';


  access = localStorage.getItem('access');
  
  checkAccess() {
    if (this.access == (null)) {
      this.router.navigate(["/login"])
    }
  }
}
