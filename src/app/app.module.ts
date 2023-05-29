import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthButtonsComponent } from './components/auth-buttons/auth-buttons.component';
import { CallbackModule } from './features/callback/callback.module';

@NgModule({
  declarations: [AppComponent, AuthButtonsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      ...env.auth0,
    }),
    SharedModule,
    CallbackModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}