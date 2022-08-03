import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/spring/model/user';
import { AdminService } from 'src/app/spring/service/admin.service';

@Component({
  selector: 'app-student-detail-dialog',
  templateUrl: './student-detail-dialog.component.html',
  styleUrls: ['./student-detail-dialog.component.scss']
})
export class StudentDetailDialogComponent implements OnInit {

  user : User;

  constructor(


    public dialogRef: MatDialogRef<StudentDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private adminService : AdminService,
    
    
  ) { }

  ngOnInit(): void {

    this.getTestByUserId();
  }

  getTestByUserId()
  {
    const token = sessionStorage.getItem('token');
    this.adminService.getTestById(token,this.data.user.userId)
      .subscribe(data => {
        this.user = data
        console.log(this.user)
        stop()
      })
  }

}
export interface DialogData {
  user: User;
}