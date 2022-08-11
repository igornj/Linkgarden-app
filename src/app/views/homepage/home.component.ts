import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }


  goToLogin(): void {
    const url: string[] = ['/login']
    this.router.navigate(url);
  }

  goToRegister(): void {
    const url: string[] = ['/register']
    this.router.navigate(url);
  }

}
