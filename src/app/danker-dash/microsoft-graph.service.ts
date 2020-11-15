import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Client } from '@microsoft/microsoft-graph-client';
import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';

import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class MicrosoftGraphService {
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  async searchCoworkers(formInput): Promise<User[]> {
    if (!this.authService.isAuthenticated()) {
      return null;
    }

    const graphClient = Client.init({
      authProvider: async (done) => {
        const token = await this.authService.getAccessToken()
          .catch((error) => {
            done(error, null);
          });

        if (token) {
          done(null, token);
        } else {
          done('Could not get an access token', null);
        }
      }
    });
    const peopleResults = await graphClient
      .api(`/users?search="displayName:${formInput}"`)
      .header('ConsistencyLevel', 'eventual')
      .get();
    console.log(peopleResults);
    const searchResults: User[] = [];
    peopleResults.value.forEach(result => {
      const user = new User(result.displayName, result.mail, result.userPrincipalName);
      searchResults.push(user);
    });
    return searchResults;
  }
}
