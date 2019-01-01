import { Component, OnInit } from '@angular/core';
import {Util} from '../.././components/Util';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  util:any;
  usuario = 'ECM9631E';
  nombreUsuario = 'Carlos Baene';
  cargoUsuario = 'Ing. Sistemas';
  anio = '2018';


  constructor(util: Util) {
    this.util = util;
  }

  ngOnInit() {}
}
