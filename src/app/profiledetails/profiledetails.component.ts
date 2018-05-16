import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {User} from '../user';

@Component({
  selector: 'app-profiledetails',
  templateUrl: './profiledetails.component.html',
  styleUrls: ['./profiledetails.component.css']
})
export class ProfiledetailsComponent implements OnInit {
  user: User;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));
  }

}
