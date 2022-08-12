import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/shared/service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: RegisterService
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
  }

}
