import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-profileoverview',
  templateUrl: './profileoverview.component.html',
  styleUrls: ['./profileoverview.component.css']
})
export class ProfileoverviewComponent implements OnInit {
  user: User;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));
    console.log(this.user.id);
  }

}
