import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { Register } from "../model/register.model";


@Injectable()
export class RegisterService {


  apiUrl = "http://localhost:8080/api/garden";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };


  constructor(
    private httpClient: HttpClient
  ) { }


  public createUser(User: Register): Observable<Register> {
    return this.httpClient.post<Register>(this.apiUrl + '/create-user', User, this.httpOptions);
  }



}
