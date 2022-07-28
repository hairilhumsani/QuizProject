import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './webpages/admin-page/admin-page.component';
import { LoginComponent } from './webpages/login/login.component';
import { RegisterComponent } from './webpages/register/register.component';

const routes: Routes = [

  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "admin", component: AdminPageComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
