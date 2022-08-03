import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/spring/model/user';
import { AdminService } from 'src/app/spring/service/admin.service';
import { QuestionAdminDialogComponent } from '../question-admin-page/dialog/question-admin-dialog/question-admin-dialog.component';
import { StudentDetailDialogComponent } from './dialog/student-detail-dialog/student-detail-dialog.component';

@Component({
  selector: 'app-student-admin-page',
  templateUrl: './student-admin-page.component.html',
  styleUrls: ['./student-admin-page.component.scss']
})
export class StudentAdminPageComponent implements OnInit {

  displayedColumns: string[] = ['position','username','role','email'];
  user : User[];
  constructor(

    private adminService : AdminService,
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {

    this.getUsersByRole()
  }


  getUsers() {
    const token = sessionStorage.getItem('token');
    this.adminService.getAllUsers(token)
      .subscribe(data => {
        this.user = data
        stop()
      })
  }

  getUsersByRole() {
    const token = sessionStorage.getItem('token');
    this.adminService.getUsersByRole(token,'student')
      .subscribe(data => {
        this.user = data
        stop()
      })
  }

  openDialog(user : User): void {
    const dialogRef = this.dialog.open(StudentDetailDialogComponent, {
      width: '100%',
      height: 'fit-content',
      data: {user: user},
    });
  }

}
