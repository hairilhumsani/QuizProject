import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  opened: boolean;

  username: string | null = sessionStorage.getItem('username');

  constructor(private router: Router, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  redirectTo(page: string) {
    this.router.navigate([page], { relativeTo: this.route })
  }

  logout() {
    if (confirm("Are you sure you want to logout?")) {
      this.router.navigate(['/login'])
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('username');
    }

  }
}
