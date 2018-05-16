import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SmallprofileComponent } from './smallprofile/smallprofile.component';
import { TrendingTopicsComponent } from './trending-topics/trending-topics.component';
import { RouterModule, Routes} from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfiledetailsComponent } from './profiledetails/profiledetails.component';
import { ProfilefollowersComponent } from './profilefollowers/profilefollowers.component';
import { ProfilefollowingComponent } from './profilefollowing/profilefollowing.component';
import { ProfilekwettersComponent } from './profilekwetters/profilekwetters.component';
import { ProfileoverviewComponent } from './profileoverview/profileoverview.component';
import { FollowableComponent } from './followable/followable.component';
import { TinyprofileComponent } from './tinyprofile/tinyprofile.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.component';
import {AuthGuard} from './auth.guard';
import {AlertService} from './alert/alert.service';
import {AuthenticationService} from './login/authentication.service';
import {UserService} from './login/user.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './jwt.interceptor';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ApiService } from './api.service';
import {WebsocketService} from './websocket.service';

const routes: Routes = [
  { path: '', component: HomepageComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    NavbarComponent,
    SmallprofileComponent,
    TrendingTopicsComponent,
    HomepageComponent,
    ProfileComponent,
    ProfiledetailsComponent,
    ProfilefollowersComponent,
    ProfilefollowingComponent,
    ProfilekwettersComponent,
    ProfileoverviewComponent,
    FollowableComponent,
    TinyprofileComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },

    ApiService,
    WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
