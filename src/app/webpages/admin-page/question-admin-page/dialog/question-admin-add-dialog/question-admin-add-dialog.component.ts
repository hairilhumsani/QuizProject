import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Question } from 'src/app/spring/model/question';
import { AdminService } from 'src/app/spring/service/admin.service';
import { QuestionAdminDialogComponent } from '../question-admin-dialog/question-admin-dialog.component';

@Component({
  selector: 'app-question-admin-add-dialog',
  templateUrl: './question-admin-add-dialog.component.html',
  styleUrls: ['./question-admin-add-dialog.component.scss']
})
export class QuestionAdminAddDialogComponent implements OnInit {

  question : Question = new Question;

  constructor(

    public dialogRef: MatDialogRef<QuestionAdminAddDialogComponent>,
   // @Inject(MAT_DIALOG_DATA) public data: DialogData,
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
