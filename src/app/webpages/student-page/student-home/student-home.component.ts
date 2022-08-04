import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {

  category: string[];

  constructor(

    private router : Router,
    private route: ActivatedRoute

  ) {
    this. category = ['Science','Maths','History','English']
   }

  ngOnInit(): void {
  }

  takeTest(page: string) {
    this.router.navigate([page], { relativeTo: this.route.parent })
  }

}
