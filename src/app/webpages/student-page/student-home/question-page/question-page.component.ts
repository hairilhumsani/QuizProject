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
  randomQuestionArray : any [] 
  newQuestion : Question[] = [] 
  quizStart = false

  displayedColumns: string[] = ['position', 'category','questionString', 'option'];
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

  async startQuiz()
  {
   this.randomQuestionArray = await this.generatedRandom();
    
    for(let e in this.randomQuestionArray)
    {
      this.newQuestion.push(this.question[e])
    }

    this.quizStart = true

  }

 async generatedRandom() : Promise<any[]>
  {
    let randomArray: any [] =  [];

    while(randomArray.length < 20){
      let randomNumber =Math.round(Math.random() * this.question.length);
          if (!randomArray.includes(randomNumber)) {
            randomArray.push(randomNumber);
        }
    }
    return Promise.resolve(randomArray);
    

  }


  


  

}
