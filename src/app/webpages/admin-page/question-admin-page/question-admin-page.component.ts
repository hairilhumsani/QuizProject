import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/spring/service/admin.service';

@Component({
  selector: 'app-question-admin-page',
  templateUrl: './question-admin-page.component.html',
  styleUrls: ['./question-admin-page.component.scss']
})
export class QuestionAdminPageComponent implements OnInit {

  
  constructor(


    private adminService: AdminService
  ) { }

  ngOnInit(): void {

    this.getQuestion();

  }


  getQuestion() {
    const token = sessionStorage.getItem('token');
    console.log(token);
    this.adminService.getQuestions(token)
      .subscribe(data => {
        console.log(data)

      })
  }

}
