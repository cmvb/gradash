import { Component, OnInit } from '@angular/core';
import {Util} from '../.././components/Util';

declare var $: any;

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  util:any;

  constructor(util: Util) {
    this.util = util;
  }

  ngOnInit() {}
}
