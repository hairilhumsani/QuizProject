import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionAdminAddDialogComponent } from './question-admin-page/dialog/question-admin-add-dialog/question-admin-add-dialog.component';
import { QuestionAdminDialogComponent } from './question-admin-page/dialog/question-admin-dialog/question-admin-dialog.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  opened: boolean;

  constructor(private router: Router, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  redirectTo(page: string) {
    this.router.navigate([page], { relativeTo: this.route })
  }

  logout() {
    this.router.navigate(['/login'])
    sessionStorage.removeItem('token');
  }

  addQuestion(): void {
    const dialogRef = this.dialog.open(QuestionAdminAddDialogComponent, {
      width: '100%',
      height: 'fit-content'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
