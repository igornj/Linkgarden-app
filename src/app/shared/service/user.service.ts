import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map, shareReplay } from "rxjs";
import { User } from "../model/user.model";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "http://localhost:8080/api/garden";

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/html',
      'Content-Type': 'application/json'
    }),
  };

  public userData: BehaviorSubject<User> = new BehaviorSubject<User>({
    name: '',
    email: '',
    userAddress: '',
    password: '',
    profileImage: ''
  });


  constructor(private httpClient: HttpClient) { }

  get(): Observable<User> {
    return this.userData.asObservable();
  }

  getUserInfo(userEmail: string) {
    this.httpClient.get<User>(this.apiUrl + '/get-user/' + userEmail)
      .pipe(shareReplay(1))
      .subscribe(result => this.userData.next(result))
  }

}
