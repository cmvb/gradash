import {Component, OnInit} from '@angular/core';
import {Util} from '../.././components/Util';
import {RestService} from '../.././services/rest.service';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [RestService]
})
export class HeaderComponent implements OnInit {
  util: any;
  data: any = [];
  usuario: any;
  contadorMensajes = 4;
  contadorNotificaciones = 0;
  claseIconoNoty: any;
  claseIconoMsj: any;
  claseAnimacionNoty: any;
  claseAnimacionMsj: any;

  constructor(public restService: RestService, util: Util) {
    this.util = util;
    this.usuario = JSON.parse(localStorage.getItem('usuarioSesion').toString());
  }

  ngOnInit() {
    this.claseIconoMsj = (this.contadorMensajes > 0) ? 'sombraTexto' : '';
    this.claseIconoNoty = (this.contadorNotificaciones > 0) ? 'sombraTexto' : '';
    this.claseAnimacionMsj = (this.contadorMensajes > 0) ? 'faa-shake animated' : '';
    this.claseAnimacionNoty = (this.contadorNotificaciones > 0) ? 'faa-ring animated' : '';
  }

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
