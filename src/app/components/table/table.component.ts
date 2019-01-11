import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {NgForm} from '@angular/forms';
import 'rxjs/add/operator/map';
import {format} from 'url';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import {DataObjects} from '../.././components/ObjectGeneric'
import {Util} from '../.././components/Util';
import {Observable} from 'rxjs';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

export var sizeList = 0;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  @Input() lista: any[];
  @Input() cabeceras: any[];
  
  @Input() btnEditar: any[];
  @Input() btnEliminar: any[];
  @Input() btnTarifaAContrato: any[];
  @Input() btnGuardarCopago: any[];
  @Input() btnImprimirCopago: any[];

  @Output() enviarObjetoEditar: EventEmitter<any> = new EventEmitter();
  @Output() enviarObjetoEliminar: EventEmitter<any> = new EventEmitter();

  p: number = 1;

  msg: any;
  const: any;
  util: any;
  pagina: any;
  collectionSize: any;
  pageSize: any;
  rotate: any;
  constructor(private router: Router, datasObject: DataObjects, util: Util) {
    this.const = datasObject.getConst();
    this.msg = datasObject.getProperties(this.const.idiomaEs);
    this.util = util;
    this.pagina = '1';
    this.collectionSize = this.const.collectionSize;
    this.rotate = this.const.rotate;
    this.pageSize = this.const.pageSize;
  }

  ngOnInit() {
  }

  editar(obj) {
    this.enviarObjetoEditar.emit(obj);
    return true;
  }

  eliminar(obj) {
    this.enviarObjetoEliminar.emit(obj);
    return true;
  }
}
