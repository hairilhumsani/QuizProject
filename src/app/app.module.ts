import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './webpages/index/app.component';
import { LoginComponent } from './webpages/public-page/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../assets/material/material.module';
import { RegisterComponent } from './webpages/public-page/register/register.component';
import { StudentPageComponent } from './webpages/student-page/student-page.component';
import { AdminPageComponent } from './webpages/admin-page/admin-page.component';
import { QuestionPageComponent } from './webpages/student-page/question-page/question-page.component';
import { QuestionAdminPageComponent } from './webpages/admin-page/question-admin-page/question-admin-page.component';
import { StudentAdminPageComponent } from './webpages/admin-page/student-admin-page/student-admin-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StudentPageComponent,
    AdminPageComponent,
    QuestionPageComponent,
    QuestionAdminPageComponent,
    StudentAdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
