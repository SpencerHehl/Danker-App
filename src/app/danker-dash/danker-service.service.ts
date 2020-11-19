import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Dank } from './dank.model';

@Injectable({
  providedIn: 'root'
})
export class DankerServiceService {
  baseUri = 'https://danker-backend.azurewebsites.net/api';

  constructor(
    private http: HttpClient
  ) { }

  getRecentDanks() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const uri = this.baseUri + '/danke/recents';
    return this.http.get(uri, httpOptions);
  }

  getDankerLeaders(filter) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const uri = `${this.baseUri}/leaders/danker?filter=${filter}`;
    return this.http.get(uri, httpOptions);
  }

  getDankeeLeaders(filter) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const uri = `${this.baseUri}/leaders/dankee?filter=${filter}`;
    return this.http.get(uri, httpOptions);
  }

  submitDank(dank: Dank) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    const uri = this.baseUri + '/danke';
    return this.http.post(uri, dank, httpOptions);
  }
}
