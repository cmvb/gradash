import { Component, OnInit } from '@angular/core';
import {Util} from '../.././components/Util';

declare var $: any;

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  util:any;

  constructor(util: Util) {
    this.util = util;
  }

  ngOnInit() {}
}
