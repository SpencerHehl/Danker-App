import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MsalModule } from '@azure/msal-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DankerDashModule } from './danker-dash/danker-dash.module';
import { OAuthSettings } from './auth.service';
import { SubmitDankComponent } from './submit-dank/submit-dank.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitDankComponent
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
