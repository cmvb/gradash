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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RestService]
})

export class HomeComponent implements OnInit {
  usuario: any;
  logueado:boolean;
  util:any;
  msg:any;
  const: any;
  
  constructor(private router: Router, private route: ActivatedRoute, public restService: RestService, datasObject: DataObjects, util: Util) {
    this.usuario = datasObject.getDataUsuario();
    this.msg = datasObject.getProperties(datasObject.getConst().idiomaEn);
    this.const = datasObject.getConst();
    this.util = util;
  }

  ngOnInit() {
    console.clear();
  }

  ngDoCheck(){
  }

  login() {
    try {
      let url = this.const.urlRestService + 'login';
      let obj = this.usuario;

      this.restService.postREST(url, obj)
        .subscribe(resp => {
          console.log(resp, "res");
          this.usuario = resp;
          localStorage.setItem('usuarioSesion', JSON.stringify(this.usuario));
          debugger;
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.log(error, "error");
        })

        console.log('Usuario:' + this.usuario);
    } catch (e) {
      console.log(e);
    }
  }
  
  
}