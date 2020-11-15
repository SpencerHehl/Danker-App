import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MicrosoftGraphService {
  graphRootApi = 'https://graph.microsoft.com/v1.0/me';

  constructor(
    private http: HttpClient
  ) { }

  searchCoworkers(formInput) {
    const peopleSearchUrl = this.graphRootApi + '/people/?';
    const httpOptions = {
      params: new HttpParams().set('search', formInput)
    };
    return this.http.get(peopleSearchUrl, httpOptions);
  }
}
