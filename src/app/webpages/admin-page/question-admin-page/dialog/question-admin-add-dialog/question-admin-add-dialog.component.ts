import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Question } from 'src/app/spring/model/question';
import { AdminService } from 'src/app/spring/service/admin.service';

@Component({
  selector: 'app-question-admin-add-dialog',
  templateUrl: './question-admin-add-dialog.component.html',
  styleUrls: ['./question-admin-add-dialog.component.scss']
})
export class QuestionAdminAddDialogComponent implements OnInit {

  question : Question = new Question;
  constructor(

    public dialogRef: MatDialogRef<QuestionAdminAddDialogComponent>,
    private adminService : AdminService

  ) { }

  ngOnInit(): void {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addQuestion()
  {
    const token = sessionStorage.getItem('token');
    this.adminService.addQuestion(token,this.question)
      .subscribe(data => {
        console.log("Added")
        this.dialogRef.close();
      })
  }

}
