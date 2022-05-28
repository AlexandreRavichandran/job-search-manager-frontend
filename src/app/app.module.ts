import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './public/login-form/login-form.component';
import { HomeComponent } from './public/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { TokenInterceptor } from './shared/auth/interceptor/token.interceptor';
import { ErrorInterceptor } from './shared/auth/interceptor/error.interceptor';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApplicationStatusConstant } from './dashboard/application/application-status-constant';
import { ApplicationResultConstant } from './dashboard/application/application-result-constant';
import { MatMenuModule } from '@angular/material/menu';
import { RegisterFormComponent } from './public/register-form/register-form.component';
import { AuthComponent } from './public/auth/auth.component';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponent,
    RegisterFormComponent,
    AuthComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem("access_token");
        },
      }
    })
  ],
  providers: [
    ApplicationStatusConstant,
    ApplicationResultConstant,
    {
      provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
