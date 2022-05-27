import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { User } from 'src/app/shared/user/user';

@Component({
  selector: 'jsm-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    username: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    passwordConf: new FormControl("", Validators.required),
  })

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  private checkPassword(): boolean {
    return false;
  }

  onRegister(): void {

    const user: User = {
      firstName: this.registerForm.get("firstName")?.value,
      lastName: this.registerForm.get("lastName")?.value,
      email: this.registerForm.get("email")?.value,
      password: this.registerForm.get("password")?.value,
      username: this.registerForm.get("username")?.value
    }
    this.authService.register(user).subscribe({
      next: token => {
        sessionStorage.setItem("token", token.token);
        this.router.navigate(["/dashboard"]);
      }
    })
  }

  preFillUsername(): void {
    const username = this.registerForm.get("firstName")?.value + "." + this.registerForm.get("lastName")?.value;
    this.registerForm.get("username")?.setValue(username.toLowerCase());
  }

}
