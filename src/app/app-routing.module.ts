import { Component, NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './webpages/admin-page/admin-page.component';
import { QuestionAdminPageComponent } from './webpages/admin-page/question-admin-page/question-admin-page.component';
import { StudentAdminPageComponent } from './webpages/admin-page/student-admin-page/student-admin-page.component';
import { LoginComponent } from './webpages/public-page/login/login.component';
import { RegisterComponent } from './webpages/public-page/register/register.component';

const routes: Routes = [

  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "admin", component: AdminPageComponent, children: [
      { path: "", redirectTo: "question", pathMatch: "full" },
      { path: "question", component: QuestionAdminPageComponent },
      { path: "students", component: StudentAdminPageComponent }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes),MatTableModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
