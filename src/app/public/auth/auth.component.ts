import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jsm-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  currentForm: string = "login";

  constructor() { }

  ngOnInit(): void {
  }

  switchForm() {
    if (this.currentForm !== "login") {
      this.currentForm = "login";
    } else {
      this.currentForm = "register";
    }
  }
}
