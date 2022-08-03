import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Test } from 'src/app/spring/model/test';
import { User } from 'src/app/spring/model/user';
import { AdminService } from 'src/app/spring/service/admin.service';
import { StudentTestDialogComponent } from '../student-test-dialog/student-test-dialog.component';

@Component({
  selector: 'app-student-detail-dialog',
  templateUrl: './student-detail-dialog.component.html',
  styleUrls: ['./student-detail-dialog.component.scss']
})
export class StudentDetailDialogComponent implements OnInit {

  user: User;
  test: Test[];

  constructor(


    public dialogRef: MatDialogRef<StudentDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private adminService: AdminService,
    public dialog: MatDialog


  ) { }

  ngOnInit(): void {

    this.getTestByUserId();
    this.user = this.data.user
  }

  getTestByUserId() {
    const token = sessionStorage.getItem('token');
    this.adminService.getTestById(token, this.data.user.userId)
      .subscribe(data => {
        this.test = data
        stop()
      })
  }

  deleteUser() {
    const token = sessionStorage.getItem('token');
    this.adminService.deleteUser(token, this.data.user.userId)
      .subscribe(data => {
        this.dialogRef.close();
      })
  }

  updateUser() {
    const token = sessionStorage.getItem('token');
    this.adminService.updateUser(token, this.data.user)
      .subscribe(data => {
        this.dialogRef.close();
      })
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(StudentTestDialogComponent, {
      width: '100%',
      height: 'fit-content',
      data: {test: this.test},
    });
  }

}
export interface DialogData {
  user: User;
}