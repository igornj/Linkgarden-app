import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../model/user.model";


@Injectable()
export class UserService {
  apiUrl = "http://localhost:8080/api/garden";

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/html',
      'Content-Type': 'application/json'
    }),
  };

  constructor(private httpClient: HttpClient) { }


  getUserInfo(userEmail: string): Observable<User> {
    return this.httpClient.get<User>(this.apiUrl + '/get-user/' + userEmail);
  }

}
