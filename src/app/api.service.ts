import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Message} from './message/message';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {User} from './user';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getAllKwetters(): Observable<Message[]> {
    return this.http.get<Message[]>(API_URL + '/kwetter');
  }

  public getKwettersForUser(id: number): Observable<Message[]> {
    return this.http.get<Message[]>(API_URL + '/kwetter/author/' + id);
  }

  public getUser(id: number): Observable<User> {
    return this.http.get<User>(API_URL + '/user/' + id);
  }

  public getFollowers(id: number): Observable<User[]> {
    return this.http.get<User[]>(API_URL + 'user/followers/' + id);
  }

  public getFollowing(id: number): Observable<User[]> {
    return this.http.get<User[]>(API_URL + 'user/following/' + id);
  }

  public kwetter(message: string): Observable<Message> {

    const user = <User>JSON.parse(sessionStorage.getItem('currentUser'));

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    headers.set('Authorization', 'Bearer ' + user.token);

    return this.http.post<Message>(API_URL + '/kwetter/author/' + user.id, message, {headers: headers});
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
