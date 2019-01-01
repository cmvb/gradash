import { Component, OnInit } from '@angular/core';
import {Util} from '../.././components/Util';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  util:any;

  constructor(util: Util) {
    this.util = util;
  }

  ngOnInit() {}
}
