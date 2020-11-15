import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MsalModule } from '@azure/msal-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DankerDashModule } from './danker-dash/danker-dash.module';
import { OAuthSettings } from './auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DankerDashModule,
    MsalModule.forRoot({
      auth: {
        clientId: OAuthSettings.appId,
        redirectUri: OAuthSettings.redirectUri
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
