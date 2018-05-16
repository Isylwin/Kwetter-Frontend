import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {User} from '../user';

@Component({
  selector: 'app-profilefollowers',
  templateUrl: './profilefollowers.component.html',
  styleUrls: ['./profilefollowers.component.css']
})
export class ProfilefollowersComponent implements OnInit {

  user: User;
  followers: User[] = [];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));

    this.api.getFollowers(this.user.id)
      .subscribe((followers) => {
        this.followers = followers;
      });
  }

}
