import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Question } from 'src/app/spring/model/question';
import { AdminService } from 'src/app/spring/service/admin.service';

@Component({
  selector: 'app-question-admin-dialog',
  templateUrl: './question-admin-dialog.component.html',
  styleUrls: ['./question-admin-dialog.component.scss']
})


export class QuestionAdminDialogComponent implements OnInit {

  question: Question = new Question;


  constructor(

    public dialogRef: MatDialogRef<QuestionAdminDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private adminService: AdminService

  ) { }

  ngOnInit(): void {
    this.question = this.data.question;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateQuestion() {
    const token = sessionStorage.getItem('token');
    this.adminService.updateQuestion(token, this.question)
      .subscribe(data => {
        this.dialogRef.close();
      })
  }

  deleteQuestion() {
    const token = sessionStorage.getItem('token');
    this.adminService.deleteQuestion(token, this.question.questionId)
      .subscribe(data => {
        this.dialogRef.close();
        this.data.table.renderRows();
      })


  }
}


export interface DialogData {
  table: MatTable<any>;
  question: Question;
}
