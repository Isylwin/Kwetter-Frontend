import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertService} from '../alert/alert.service';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private alertService: AlertService) { }

  register() {
    this.loading = true;
    this.http.post<any>(environment.apiUrl + '/login/signup', { username: this.model.username, password: this.model.password })
      .subscribe(
        data => {
          // set success message and pass true paramater to persist the message after redirecting to the login page
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
