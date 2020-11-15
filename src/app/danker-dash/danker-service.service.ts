import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Dank } from './dank.model';

@Injectable({
  providedIn: 'root'
})
export class DankerServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getDanks() {
  }

  submitDank(dank: Dank) {
    console.log(dank);
  }
}
