import { Component, OnInit } from '@angular/core';
import {DataObjects} from '../.././components/ObjectGeneric'
import {Util} from '../.././components/Util';

@Component({
  selector: 'app-advance-elements',
  templateUrl: './advance-elements.component.html',
  styleUrls: ['./advance-elements.component.css']
})
export class AdvanceElementsComponent implements OnInit {
  fechaActual: any;
  fechaNacimiento: any;
  util:any;
  msg:any;
  const: any;

  constructor(datasObject: DataObjects, util: Util) {
    this.msg = datasObject.getProperties(datasObject.getConst().idiomaEn);
    this.const = datasObject.getConst();
    this.util = util;
  }

  ngOnInit() {
  }

}
