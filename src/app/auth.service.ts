import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

import { User } from './user.model';

export const OAuthSettings = {
  appId: 'b28f8cf4-1ad5-4103-a374-9dd4326ac459',
  redirectUri: 'http://localhost:4200',
  scopes: [
    'user.read',
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
    this.authenticated = false;
    this.user = null;
  }

  async login(): Promise<void> {
    const result = await this.msalService.loginPopup(OAuthSettings)
      .catch((error) => {
        console.error(error);
      });

    if (result) {
      this.authenticated = true;
      // this.user = new User();
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
}
