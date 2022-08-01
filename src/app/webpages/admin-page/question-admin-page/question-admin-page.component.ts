import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { Question } from 'src/app/spring/model/question';
import { AdminService } from 'src/app/spring/service/admin.service';
import { MatDialog} from '@angular/material/dialog';
import { QuestionAdminDialogComponent } from './dialog/question-admin-dialog/question-admin-dialog.component';
import { QuestionAdminAddDialogComponent } from './dialog/question-admin-add-dialog/question-admin-add-dialog.component';

@Component({
  selector: 'app-question-admin-page',
  templateUrl: './question-admin-page.component.html',
  styleUrls: ['./question-admin-page.component.scss']
})

export class QuestionAdminPageComponent implements OnInit {

  animal: string;
  name: string;


  displayedColumns: string[] = ['questionId','questionString','correctAnswer'];
  question : Question[]
  category : string[] = ['Science','Maths','Java']

  constructor(
    private adminService: AdminService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.getQuestion()
    
  }

  getQuestion() {
    const token = sessionStorage.getItem('token');
    this.adminService.getQuestions(token)
      .subscribe(data => {
        this.question = data
        stop
      })
  }

  getQuestionByCategory(category : string) : any{
    const token = sessionStorage.getItem('token');
    this.adminService.getQuestionsByCategory(token,category)
      .subscribe(data => {
        this.question = data
      })
  }

  getQuestionById(id : number) : any{
    const token = sessionStorage.getItem('token');
    this.adminService.getQuestionsById(token,id)
      .subscribe(data => {
        this.question = data
      })
  }

  openDialog(id :number): void {
    console.log(id);
    const dialogRef = this.dialog.open(QuestionAdminDialogComponent, {
      width: '100%',
      height: 'fit-content',
      data: {name: this.name, animal: this.animal , question: this.question[id - 1]},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
