import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {User} from '../user';

@Component({
  selector: 'app-profilefollowing',
  templateUrl: './profilefollowing.component.html',
  styleUrls: ['./profilefollowing.component.css']
})
export class ProfilefollowingComponent implements OnInit {

  user: User;
  following: User[] = [];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));

    this.api.getFollowing(this.user.id)
      .subscribe((following) => {
        this.following = following;
      });
  }

}
