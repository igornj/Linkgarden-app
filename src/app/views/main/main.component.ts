import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Garden } from 'src/app/shared/model/creategarden.model';
import { User } from 'src/app/shared/model/user.model';
import { GardenService } from 'src/app/shared/service/garden.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [GardenService, UserService]
})

export class MainComponent implements OnInit {

  public gardenList: Garden[] = [];
  public userData: any;
  private userLoggedIn = localStorage.getItem("userLoggedIn") as string;
  private destroyed$ = new Subject();


  constructor(
    private gardenService: GardenService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.findGardens();
    this.userService.getUserInfo(this.userLoggedIn);
    this.userInfo();
  }


  findGardens() {
    this.gardenService.findGardens(this.userLoggedIn).subscribe(e => e.forEach(item => this.gardenList.push(item)));
  }

  userInfo() {
    this.userService.get().pipe(
      // it is now important to unsubscribe from the subject
      takeUntil(this.destroyed$)
    ).subscribe(data => {
      this.userData = data;
      console.log(this.userData); // the latest data
    });
  }

}
