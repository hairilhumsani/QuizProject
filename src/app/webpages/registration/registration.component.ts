import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cancel()
  {
    localStorage.setItem('access','login');
  }

  
 /* @HostListener('window:popstate', ['$event'])
  onPopState(event): void {
    console.log('Back button pressed');
  }*/

}
