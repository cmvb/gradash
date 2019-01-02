import { Component, OnInit } from '@angular/core';
import {Util} from '../.././components/Util';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  util:any;

  constructor(util: Util) {
    this.util = util;
  }

  ngOnInit() {}

  sidebarCollapse(){
    $("#sidebar").toggleClass("active");
    if($("#sidebar").hasClass("active")){
      $(".content-inner-all").css("margin-left", "80px" );
      $(".fixed-header-top").css("left", "80px" );
    }
    else{
      $(".content-inner-all").css("margin-left", "200px" );
      $(".fixed-header-top").css("left", "200px" );
    }
  }
}
