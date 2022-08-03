import { Component, Inject, NgModule, OnInit, ViewChild } from '@angular/core';
import { Question } from 'src/app/spring/model/question';
import { AdminService } from 'src/app/spring/service/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { QuestionAdminDialogComponent } from './dialog/question-admin-dialog/question-admin-dialog.component';
import { QuestionAdminAddDialogComponent } from './dialog/question-admin-add-dialog/question-admin-add-dialog.component';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-question-admin-page',
  templateUrl: './question-admin-page.component.html',
  styleUrls: ['./question-admin-page.component.scss']
})

export class QuestionAdminPageComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any>;

  displayedColumns: string[] = ['position', 'category', 'difficulty', 'questionString', 'correctAnswer'];
  question: Question[]
  category: string[] = ['Science', 'Maths', 'Java']

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
        stop()
      })
  }

  getQuestionByCategory(category: string): any {
    const token = sessionStorage.getItem('token');
    this.adminService.getQuestionsByCategory(token, category)
      .subscribe(data => {
        this.question = data
      })
  }

  getQuestionById(id: number): any {
    const token = sessionStorage.getItem('token');
    this.adminService.getQuestionsById(token, id)
      .subscribe(data => {
        this.question = data
      })
  }

  openDialog(question: Question): void {
    const dialogRef = this.dialog.open(QuestionAdminDialogComponent, {
      width: '100%',
      height: 'fit-content',
      data: { question: question, table: this.table },
    });
    dialogRef.afterClosed().subscribe(
      result => {
        this.getQuestion()
      })
  }

  addQuestion(): void {
    const dialogRef = this.dialog.open(QuestionAdminAddDialogComponent, {
      width: '100%',
      height: 'fit-content',
    });
  }


  checkDifficulty(i: number): string | undefined {
    switch (i) {
      case 1:
        return "Easy";

      case 2:
        return "Medium";

      case 3:
        return "Hard";

      default:
        return undefined;
    }

  }



}
