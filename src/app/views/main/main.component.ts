import { Component, Input, OnInit } from '@angular/core';
import { Garden } from 'src/app/shared/model/creategarden.model';
import { User } from 'src/app/shared/model/user.model';
import { GardenService } from 'src/app/shared/service/garden.service';
import { UserService } from 'src/app/shared/service/user.service';
import { LoginComponent } from '../loginpage/login.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [GardenService, UserService]
})

export class MainComponent implements OnInit {

  public gardenList: Garden[] = [];
  private userLoggedIn = localStorage.getItem("userLoggedIn") as string;
  public userInfo: User[] = [];

  constructor(private gardenService: GardenService, private userService: UserService) { }

  ngOnInit(): void {
    this.findGardens();
    this.getUserInfo();
  }


  findGardens() {
    this.gardenService.findGardens(this.userLoggedIn).subscribe(e => e.forEach(item => this.gardenList.push(item)));
  }

  getUserInfo() {
    this.userService.getUserInfo(this.userLoggedIn).subscribe(e => this.userInfo.push(e));
  }


  getUserEmail() {
    // this.userEmailService.data.subscribe(email => {
    //   console.log("getUserEmail: ", email);
    // });
  }

}
