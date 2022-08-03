import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Test } from 'src/app/spring/model/test';

@Component({
  selector: 'app-student-test-dialog',
  templateUrl: './student-test-dialog.component.html',
  styleUrls: ['./student-test-dialog.component.scss']
})
export class StudentTestDialogComponent implements OnInit {

  test: Test[]
  displayedColumns: string[] = ['position', 'category', 'date', 'difficulty', 'score'];


  constructor(

    public dialogRef: MatDialogRef<StudentTestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,

  ) { }

  ngOnInit(): void {
   this.test = this.data.test

  }

  scorePercentage(testScore: number, totalScore: number): any {
    return (testScore / totalScore) * 100
  }

  checkDifficulty(i: string): string | undefined {
    switch (i) {
      case "1":
        return "Easy";

      case "2":
        return "Medium";

      case "3":
        return "Hard";

      default:
        return undefined;
    }
  }


}

export interface DialogData {
  test: Test[]
}
