import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { MsalService } from '@azure/msal-angular';
import { Client } from '@microsoft/microsoft-graph-client';
import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';

import { User } from './user.model';

export const OAuthSettings = {
  appId: 'b28f8cf4-1ad5-4103-a374-9dd4326ac459',
  // redirectUri: 'http://localhost:4200',
  redirectUri: 'https://danker-app.azurewebsites.net',
  scopes: [
    'user.read',
    'user.readbasic.all',
    'user.readwrite.all',
    'directory.read.all',
    'directory.readwrite.all',
    'directory.accessasuser.all',
    'group.read.all',
    'people.read',
    'people.read.all',
  ]
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authenticated: boolean;
  public user: User;

  constructor(
    private msalService: MsalService
  ) {
    this.authenticated = this.msalService.getAccount() != null;
    this.getUser().then((user) => {
      this.user = user;
    });
  }

  async login(): Promise<void> {
    const result = await this.msalService.loginPopup(OAuthSettings)
      .catch((error) => {
        console.error(error);
      });

    if (result) {
      this.authenticated = true;
      this.user = await this.getUser();
    }
  }

  logout() {
    this.msalService.logout();
    this.user = null;
    this.authenticated = false;
  }

  isAuthenticated() {
    return this.authenticated;
  }

  async getAccessToken(): Promise<string> {
    const result = await this.msalService.acquireTokenSilent(OAuthSettings)
      .catch((error) => {
        console.error(error);
      });

    if (result) {
      return result.accessToken;
    }

    this.authenticated = false;
    return null;
  }

  private async getUser(): Promise<User> {
    if (!this.authenticated) {
      return null;
    }

    const graphClient = Client.init({
      authProvider: async (done) => {
        const token = await this.getAccessToken()
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
    const graphUser: MicrosoftGraph.User = await graphClient
      .api('/me')
      .select('displayName,mail,userPrincipalName')
      .get();

    const user = new User(graphUser.displayName, graphUser.mail, graphUser.userPrincipalName);
    return user;
  }
}
