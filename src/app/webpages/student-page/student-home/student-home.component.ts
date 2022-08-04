import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/spring/model/question';
import { StudentService } from 'src/app/spring/service/student.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {

  category: string[];
  new_category: string[];
  question : Question[];

  constructor(

    private router: Router,
    private route: ActivatedRoute


  ) {
    this.category = ['Science', 'Maths', 'History', 'English']
  }

  ngOnInit(): void {

  }




  takeTest(page: string, c: string) {
    this.router.navigate([page], { relativeTo: this.route.parent, queryParams: { category: c } })
  }


}
