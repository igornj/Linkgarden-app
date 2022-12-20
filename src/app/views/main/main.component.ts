import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Garden } from 'src/app/shared/model/creategarden.model';
import { User } from 'src/app/shared/model/user.model';
import { GardenService } from 'src/app/shared/service/garden.service';
import { UserService } from 'src/app/shared/service/user.service';
import * as userAction from 'src/app/ngrx/user-action';
import { emailSelector, userSelectorSuccess } from 'src/app/ngrx/user-selectors';
import { map, Observable } from 'rxjs';
import { appStateInterface } from 'src/app/types/appState.interface';

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
  userInfo$: Observable<User>;

  constructor(
    private gardenService: GardenService,
    private store: Store<appStateInterface>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(userAction.getUserInfo());
    this.userInfo$ = this.store.pipe(select(userSelectorSuccess));
    this.findGardens();
  }


  findGardens() {
    this.gardenService.findGardens(this.userLoggedIn).subscribe(e => e.forEach(item => this.gardenList.push(item)));
  }

}
