import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './webpages/login/login.component';
import { RegistrationComponent } from './webpages/registration/registration.component';

const routes: Routes = [
  
    { path: "login", component: LoginComponent },
    {path: "register", component: RegistrationComponent}
    
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
