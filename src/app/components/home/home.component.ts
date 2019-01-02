import {Component, OnInit, Input, forwardRef, Inject} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {format} from 'url';
import {Router, ActivatedRoute,NavigationEnd} from '@angular/router';
import {DataObjects} from '../.././components/ObjectGeneric'
import {Util} from '../.././components/Util';
import {Observable} from 'rxjs';
import {NgxPaginationModule} from 'ngx-pagination';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  usuario: any;
  login: any;
  logueado:boolean;

  usuarioVacio: any;
  usuarioSesion: any;
  util:any;
  listaConsulta = [];

  minDate: {year: 1000, month: 1, day: 1};
  maxDate: {year: 3000, month: 1, day: 1};
  date: any;
  ancla:any;
  URLactual:any;
  ip:any;
  msg:any;

  conectado = false;
  usuarioConectado:any;

  headers = new Headers({'Content-Type': 'application/json'});
  options = new RequestOptions({headers: this.headers});

  test: Date = new Date();
  p: number = 1;
  objeto: any;
  objetoRegistro: any;
  lista: any;
  const:any;
  apiUrl = 'http://servidor.globeguides.co';
  apiUrlIp = 'http://ip-api.com/json';

  objetoFiltro:any;

  idModal: any;
  claseModal: any;
  confirmModal: boolean[];
  tituloModal: any;
  cuerpoModal: any;
  ruteModal: any;
  closeModal: boolean[];

  constructor(private http: Http, private router: Router,private route: ActivatedRoute, datasObject: DataObjects, util: Util) {
    this.idModal = [1,2,3,4,5];
    this.claseModal = ['info', 'success','warning','danger'];
    this.confirmModal = [false];
    this.tituloModal = ['INFORMATION', 'SUCCESS PROCESS', 'WARNING', 'ERROR'];
    this.ruteModal = ['/home', '/blog', '/service', 'single'];
    this.cuerpoModal = ['Loading...','The process was successfully completed', 'XXX',];
    this.closeModal = [false,true];

    this.objeto = datasObject.getData();
    this.msg = datasObject.getProperties(datasObject.getConst().idiomaEn);
    this.const = datasObject.getConst();
    this.util = util;
  }

  private fragment: string;
  ngOnInit() {
    this.obtenerIp();
  }

  ngDoCheck(){
  }

  obtenerIp(){
    let objetoIp:any;
    this.getIpCliente().toPromise().then(data => {
      let ip:any = data;
      objetoIp = JSON.stringify(data).split('"');
      this.ip = objetoIp[34].substr(0, objetoIp[34].length - 1);
      /*let temporal:any[]=JSON.stringify(data).split('"');
      this.ip = temporal[6].toString();*/
    }).catch(data => {
    });
  }
  getIpCliente(): Observable<Response> {
    return this.http.get(this.apiUrlIp);
  }

}
