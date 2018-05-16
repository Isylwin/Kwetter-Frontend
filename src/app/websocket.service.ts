import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {environment} from 'environments/environment';

@Injectable()
export class WebsocketService {

  private socket;

  constructor() {
    const id = JSON.parse(sessionStorage.getItem('currentUser')).id;
    this.socket = new WebSocket(environment.websocket + '/' + id);
  }

  getSocket() {
    return this.socket;
  }

}
