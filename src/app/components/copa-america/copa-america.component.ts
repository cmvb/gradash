import {Component, OnInit, Input, forwardRef, Inject} from '@angular/core';
import {NgForm} from '@angular/forms';
import 'rxjs/add/operator/map';
import {format} from 'url';
import {Router, ActivatedRoute,NavigationEnd} from '@angular/router';
import {DataObjects} from '../.././components/ObjectGeneric'
import {Util} from '../.././components/Util';
import {Observable} from 'rxjs';
import {RestService} from '../.././services/rest.service';

declare var $: any;

@Component({
  selector: 'app-copa-america',
  templateUrl: './copa-america.component.html',
  styleUrls: ['./copa-america.component.css'],
  providers: [RestService]
})
export class CopaAmericaComponent implements OnInit {
  util:any;
  msg:any;
  const: any;
  equipo: any;
  jugador: any;
  listaEquipos: any;
  listaJugadores: any;

  constructor(private router: Router, private route: ActivatedRoute, public restService: RestService, datasObject: DataObjects, util: Util) {
    this.msg = datasObject.getProperties(datasObject.getConst().idiomaEn);
    this.const = datasObject.getConst();
    this.util = util;
  }

  ngOnInit() {
	this.util.addClassDisplayNone('portada');
	this.util.addClassDisplayNone('menuPrincipal');
	this.util.toggleDisplay('portada');
  	console.clear();
  }

  toggleDisplay(id){
  	debugger;
	this.util.addClassDisplayNone('portada');
	this.util.addClassDisplayNone('menuPrincipal');
	this.util.toggleDisplay(id);
  }

}
