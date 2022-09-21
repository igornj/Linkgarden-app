import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/shared/service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: RegisterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      userAddress: ['', [Validators.required]],
      password: ['', [Validators.required]],
      profileImage: ['', [Validators.required]],
    });
  }


  registerUser() {
    this.service.createUser(this.registerForm.value).subscribe(result => console.log(result));
    const url: string[] = ['/login']
    this.router.navigate(url);
  }

}
