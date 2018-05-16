import { Component, OnInit } from '@angular/core';
import {MESSAGES} from '../message/mockMessages';
import {ApiService} from '../api.service';
import {Message} from '../message/message';
import {User} from '../user';

@Component({
  selector: 'app-profilekwetters',
  templateUrl: './profilekwetters.component.html',
  styleUrls: ['./profilekwetters.component.css']
})
export class ProfilekwettersComponent implements OnInit {

  messages: Message[] = [];
  user: User;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));

    this.api.getKwettersForUser(this.user.id)
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
