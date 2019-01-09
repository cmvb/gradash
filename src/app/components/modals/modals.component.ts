import { Component, OnInit } from '@angular/core';
import {Util} from '../.././components/Util';

declare var $: any;

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {
  util:any;

  constructor(util: Util) {
    this.util = util;
  }

  ngOnInit() {}
}
