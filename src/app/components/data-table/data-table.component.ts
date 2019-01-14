import {Component, OnInit, Input} from '@angular/core';
import {NgForm} from '@angular/forms';
import 'rxjs/add/operator/map';
import {format} from 'url';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import {DataObjects} from '../.././components/ObjectGeneric'
import {Util} from '../.././components/Util';
import {Observable} from 'rxjs';
import {RestService} from '../.././services/rest.service';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

declare var $: any;

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  providers: [RestService]
})
export class DataTableComponent implements OnInit {
  util:any;
  msg:any;
  const: any;
  usuario: any;
  usuarioEdit: any;
  mostrarAlert = 'displayNone';
  claseBt = 'success';
  claseBtId = 'one';

  rta: any;
  listaConsulta: any;
  btnEditar = true;
  btnEliminar = true;
  listaCabeceras = [
    {'campoLista': 'idUsuario', 'nombreCabecera': 'Id'},
    {'campoLista': 'usuario', 'nombreCabecera': 'Usuario'},
    {'campoLista': 'primerNombre', 'nombreCabecera': '1er Nombre'},
    {'campoLista': 'primerApellido', 'nombreCabecera': '1er Apellido'},
    {'campoLista': 'sexo', 'nombreCabecera': 'Género'},
    {'campoLista': 'tipoDocumento', 'nombreCabecera': 'Tipo Documento'},
    {'campoLista': 'numeroDocumento', 'nombreCabecera': 'Número Documento'},
  ];

  constructor(private router: Router, private route: ActivatedRoute, public restService: RestService, datasObject: DataObjects, util: Util) {
    this.usuario = datasObject.getDataUsuario();
    this.usuarioEdit = datasObject.getDataUsuario();
    this.rta = datasObject.getDataBase();
    this.msg = datasObject.getProperties(datasObject.getConst().idiomaEn);
    this.const = datasObject.getConst();
    this.util = util;
  }

  ngOnInit() {
    this.findAllUsuarios();
  }

  findAllUsuarios() {
    try {
      let url = this.const.urlRestService + 'findAllUsuarios';
      this.restService.getREST(url)
        .subscribe(resp => {
          console.log(resp, "res");
          this.listaConsulta = resp;
          console.log(this.listaConsulta);
        },
        error => {
          console.log(error, "error");
        })
    } catch (e) {
      console.log(e);
    }
  }

  editar(obj) {
  	this.usuarioEdit = obj;
  	this.util.showPopUpById("modalForm");
  }

  guardar(){
  	try {
      let url = this.const.urlRestService + 'saveUpdateUsuario';

      this.restService.postREST(url, this.usuarioEdit)
        .subscribe(resp => {
          console.log(resp, "res");
          localStorage.setItem('usuarioSesion', JSON.stringify(this.usuarioEdit));
          this.rta = resp;
          if(this.rta.valor){          	
          	this.claseBt = 'success';
          	this.claseBtId = 'one';
          }
          else{
          	this.claseBt = 'warning';
          	this.claseBtId = 'three';
          }
		  this.mostrarAlert = '';
		  $('#alertUsr').fadeIn();
		  setTimeout(function(){
		  	$('#alertUsr').fadeOut();
	      },50000);

		  this.findAllUsuarios();
          console.log(this.rta);
        },
        error => {
          console.log(error, "error");
        })

        console.log('Usuario:' + this.usuarioEdit);
    } catch (e) {
      console.log(e);
    }
  }

  ocultarAlert(){
  	$('#alertUsr').fadeOut();
  }

  eliminar(obj) {
    try {
      let url = this.const.urlRestService + 'deleteUsuario';

      this.restService.postREST(url, obj)
        .subscribe(resp => {
          console.log(resp, "res");
          this.rta = resp;
          if(this.rta.valor){          	
          	this.claseBt = 'success';
          	this.claseBtId = 'one';
          }
          else{
          	this.claseBt = 'warning';
          	this.claseBtId = 'three';
          }
		  this.mostrarAlert = '';
		  $('#alertUsr').fadeIn();
		  setTimeout(function(){
		  	$('#alertUsr').fadeOut();
	      },50000);

		  this.findAllUsuarios();
          console.log(this.rta);
        },
        error => {
          console.log(error, "error");
        })
    } catch (e) {
      console.log(e);
    }
  }
}
