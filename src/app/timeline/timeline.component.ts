import { Component, OnInit } from '@angular/core';
import {MESSAGES} from '../message/mockMessages';
import {ApiService} from '../api.service';
import {Message} from '../message/message';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  messages: Message[] = [];

  constructor(
    private api: ApiService
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
