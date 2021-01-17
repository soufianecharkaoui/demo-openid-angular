import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthModule, LogLevel, OidcConfigService, OidcSecurityService } from 'angular-auth-oidc-client';

export function configureAuth(oidcConfigService: OidcConfigService) {
  return () => {
    oidcConfigService.withConfig({
      stsServer: 'https://accounts.google.com',
      redirectUrl: window.location.origin,
      clientId: '643849263374-iq9de1nskbamafa14knu4k629ivtmrl8.apps.googleusercontent.com',
      responseType: 'id_token token',
      scope: 'openid profile email',
      logLevel: LogLevel.Debug,
    })
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot()
  ],
  providers: [
    OidcSecurityService,
    OidcConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configureAuth,
      deps: [OidcConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
