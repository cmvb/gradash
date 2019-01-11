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

  rtaDelete: any;
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
  	/*try {
      let url = this.const.urlRestService + 'editUsuario';

      this.restService.postREST(url, obj)
        .subscribe(resp => {
          console.log(resp, "res");
          this.usuario = resp;
          localStorage.setItem('usuarioSesion', JSON.stringify(this.usuario));
        },
        error => {
          console.log(error, "error");
        })

        console.log('Usuario:' + this.usuario);
    } catch (e) {
      console.log(e);
    }*/
  }

  eliminar(obj) {
    try {
      let url = this.const.urlRestService + 'deleteUsuario';
      let id = obj.idUsuario;

      this.restService.deleteREST(url, id)
        .subscribe(resp => {
          console.log(resp, "res");
          debugger;
          this.rtaDelete = resp;
          if(this.rtaDelete){
          	alert("Borrado Exitoso");
          }
          else{
			alert("Borrado Fallido");
          }

          console.log(this.rtaDelete);
        },
        error => {
          console.log(error, "error");
        })
    } catch (e) {
      console.log(e);
    }
  }
}
