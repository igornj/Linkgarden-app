import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Garden } from 'src/app/shared/model/creategarden.model';
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
  private destroyed$ = new Subject<boolean>();


  constructor(
    private gardenService: GardenService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.gardenService.findGardens(this.userLoggedIn);
    this.userService.getUserInfo(this.userLoggedIn);
    this.userInfo();
    this.gardenInfo();
  }

  gardenInfo() {
    this.gardenService.get()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(data => {
        data.forEach(item => this.gardenList.push(item));
      })
  }

  userInfo() {
    this.userService.get()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(data => {
        this.userData = data;
      });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe();
  }

}
