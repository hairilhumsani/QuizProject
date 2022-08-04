import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/spring/model/question';
import { StudentService } from 'src/app/spring/service/student.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {

  question: Question[]
  getCategoryData: any;

  constructor(

    private route: ActivatedRoute,
    private studentService: StudentService

  ) {

    this.getCategoryData = this.route.snapshot.queryParamMap.get('category')

  }

  ngOnInit(): void {

    this.getQuestionCategory()
  }

  getQuestionCategory() {
    const token = sessionStorage.getItem('token');
    this.studentService.getQuestionsByCategory(token, this.getCategoryData).subscribe(
      data => {
        this.question = data
        console.log(this.question)
      }
    )
  }

  

}
