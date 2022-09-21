import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Garden } from "../model/garden.model";
import { Login } from "../model/login.model";


@Injectable()
export class GardenService {
  apiUrl = "http://localhost:8080/api/garden";

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/html',
      'Content-Type': 'application/json'
    }),
  };

  constructor(private http: HttpClient) { }


  public createGarden(gardenInfo: Garden): Observable<Garden> {
    return this.http.post<Garden>(this.apiUrl + '/create-garden', gardenInfo);
  }

  public findGardens(userId: string) : Observable<Garden>{
    return this.http.get<Garden>(this.apiUrl + '/find-gardens' + userId);
  }
}
