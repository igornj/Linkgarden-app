import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Login } from "../model/login.model";


@Injectable()
export class LoginService {
  apiUrl = "http://localhost:8080/api/garden";

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/html',
      'Content-Type': 'application/json'
    }),
  };

  constructor(private http: HttpClient) { }

  private userEmailInfo = new BehaviorSubject("");
  data: Observable<string> = this.userEmailInfo.asObservable();


  public loginUser(LoginInfo: Login): Observable<Login> {
    return this.http.post<Login>(this.apiUrl + '/login-user', LoginInfo);
  }
}
