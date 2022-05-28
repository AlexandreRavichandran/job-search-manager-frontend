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
  passwordConfIsValid!: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegister(): void {
    if (this.passwordConfIsValid) {
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

  }

  preFillUsername(): void {
    const username = this.registerForm.get("firstName")?.value + "." + this.registerForm.get("lastName")?.value;
    this.registerForm.get("username")?.setValue(username.toLowerCase());
  }

  checkPasswordConf(): void {
    const password = this.registerForm.get("password");
    const passwordConf = this.registerForm.get("passwordConf");
    if (password?.value.length > 0 && passwordConf?.value.length > 0) {
      password?.dirty &&
        passwordConf?.dirty &&
        password.value === passwordConf.value ?
        this.passwordConfIsValid = true :
        this.passwordConfIsValid = false;
    }
  }
}
