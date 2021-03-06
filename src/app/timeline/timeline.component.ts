import { Component, OnInit } from '@angular/core';
import {MESSAGES} from '../message/mockMessages';
import {ApiService} from '../api.service';
import {Message} from '../message/message';
import {WebsocketService} from '../websocket.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  messages: Message[] = [];

  constructor(
    private api: ApiService,
    private websocket: WebsocketService
  ) { }

  ngOnInit() {
    this.api.getAllKwetters()
      .subscribe(
        (messages) => {
          this.messages = messages;
          this.messages.sort((a: any, b: any) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
          );
          this.getUsers();
        }
      );

    this.websocket.getSocket().onmessage = m => {
      this.messages.unshift(JSON.parse(m.data));
      this.getUsers();
    };
  }

  getUsers() {
    for (const entry of this.messages) {
      this.getUser(entry);
    }
  }

  getUser(value: any) {
    this.api.getUser(value.author).subscribe(
      (user) => {
        value.author = user.information.name;
      }
    );
  }
}
