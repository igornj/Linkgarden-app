import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: LoginService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  loginUser() {
    this.service.loginUser(this.loginForm.value).subscribe(result => localStorage.setItem("userLoggedIn", result.email));
    //const url: string[] = ['/home']

    if (localStorage.getItem("userLoggedIn")) {
      this.router.navigateByUrl('/home');
    } else {
      this.router.navigateByUrl('');
    }

  }

  forgotPassword() { }

  goToRegister(): void {
    const url: string[] = ['/register']
    this.router.navigate(url);
  }

}
