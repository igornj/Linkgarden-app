import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, shareReplay } from "rxjs";
import { Garden } from "../model/creategarden.model";


@Injectable({
  providedIn: 'root'
})
export class GardenService {
  apiUrl = "http://localhost:8080/api/garden";

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/html',
      'Content-Type': 'application/json'
    }),
  };

  public gardenData: BehaviorSubject<Garden[]> = new BehaviorSubject<Garden[]>([]);


  constructor(private http: HttpClient) { }

  public get() : Observable<Garden[]>{
    return this.gardenData.asObservable();
  }

  public createGarden(garden: Garden): Observable<Garden> {
    return this.http.post<Garden>(this.apiUrl + '/create-garden/', garden);
  }

  public findGardens(userEmail: string) {
    return this.http.get<Garden[]>(this.apiUrl + '/find-gardens/' + userEmail)
    .pipe(shareReplay(1))
    .subscribe(result => this.gardenData.next(result));
  }
}
