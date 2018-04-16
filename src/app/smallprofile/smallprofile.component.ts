import { Component, OnInit } from '@angular/core';
import {SmallProfile} from './smallprofile';
import {$} from 'protractor';
import {User} from '../user';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-smallprofile',
  templateUrl: './smallprofile.component.html',
  styleUrls: ['./smallprofile.component.css']
})
export class SmallprofileComponent implements OnInit {

  user = <User>JSON.parse(sessionStorage.getItem('currentUser'));

  profile: SmallProfile = {
    name : this.user.information.name,
    username : this.user.credentials.username,
    bio: this.user.information.bio,
    photo: this.user.information.photo,
    kwetters : 10,
    followers : this.user.followers.length,
    following : this.user.following.length
  };

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
  }

  charRemaining(event: any) {
    const charsRemaining = 140 - event.target.value.length;

    document.getElementById('chars').textContent = charsRemaining.toString();
  }

  sendKwetter(event: any) {
    const message = document.getElementById('comment').value;
    this.api.kwetter(message).subscribe((message) => message);
  }
}
