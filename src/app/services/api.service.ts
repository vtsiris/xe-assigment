import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {LocationInterface} from "./location.response";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://35.180.182.8/Search';


  constructor(private http: HttpClient) {
  }

  searchLocation(characters: string, userLang: string, limit: number): Observable<LocationInterface[]> {
    return this.http.get<LocationInterface[]>(this.url + '?keywords=' + characters + '&language=' + userLang + '&limit=' + limit);
  }
}
