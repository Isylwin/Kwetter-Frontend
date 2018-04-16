import { Component, OnInit } from '@angular/core';
import {TOPICS} from './mockTopics';

@Component({
  selector: 'app-trending-topics',
  templateUrl: './trending-topics.component.html',
  styleUrls: ['./trending-topics.component.css']
})
export class TrendingTopicsComponent implements OnInit {

  topics = TOPICS;

  constructor() { }

  ngOnInit() {
  }

}
