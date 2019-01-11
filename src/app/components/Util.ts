import {Injectable} from '@angular/core';
import {DataObjects} from '.././components/ObjectGeneric';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs';

declare var $: any;

export var objs: any;

@Injectable()
export class Util {
  msg: any;
  const: any;
  enums: any;
  headers = new Headers({'Content-Type': 'application/json'});
  options = new RequestOptions({headers: this.headers});

  constructor(private http: Http, dataObject: DataObjects) {
    this.const = dataObject.getConst();
    this.msg = dataObject.getProperties(this.const.idiomaEs);
    this.enums = dataObject.getEnumerados();
  };
  actualizarLista(listaRemover, listaActualizar) {
    if (listaRemover.length <= 0) {
      return listaActualizar;
    }
    let nuevaLista = [];
    let lista = listaRemover;
    listaActualizar.forEach(function(element, index) {
      if (listaRemover.indexOf(index) < 0) {
        nuevaLista.push(element);
      }
    })
    return nuevaLista;
  };
  llenarListaRemover(listaRemover, indiceLista) {
    let p = listaRemover.indexOf(indiceLista)
    if (p < 0) {
      listaRemover.push(indiceLista);
    } else {
      delete listaRemover[p];
    }
  }
  readOnlyXphase(listaPhases) {
    if (listaPhases == null || listaPhases.length <= 0) {
      return false;
    }
    for (let item in listaPhases) {
      if (listaPhases[item].toString().toUpperCase() == JSON.parse(localStorage.getItem('phase').toString().toUpperCase())) {
        return true;
      }
    }
    return false;
  };
  readOnlyXpermiso(accion) {

    return false;
  };
  visebleXphase(listaPhases) {
    if (listaPhases == null || listaPhases.length <= 0) {
      return false;
    }
    for (let item in listaPhases) {
      if (listaPhases[item].toString().toUpperCase() == JSON.parse(localStorage.getItem('phase').toString().toUpperCase())) {
        return true;
      }
    }
    return false;
  };
  limpiarSesion() {
    localStorage.clear();
    return true;
  };
  limpiarSesionXItem(listaItems) {
    if (listaItems == null || listaItems.length <= 0) {
      return false;
    }
    for (let item in listaItems) {
      localStorage.setItem(listaItems[item], null);
    }
    return true;
  };
  agregarSesionXItem(listaItems) {
    if (listaItems == null || listaItems.length <= 0) {
      return false;
    }
    listaItems.forEach(function(element, index) {
      localStorage.setItem(element.item, JSON.stringify(element.valor));
    });
    return true;
  };
  getSesionXItem(item) {
    if (item == null) {
      return null;
    }

    let temp = localStorage.getItem(item);
    return JSON.parse(temp);
  };
  getEnum(enumerado) {
    if (enumerado == this.enums.sino.cod) {
      return this.enums.sino.valores;
    }
    else if (enumerado == this.enums.sexo.cod) {
      return this.enums.sexo.valores;
    }
    else if (enumerado == this.enums.estadoUsuario.cod) {
      return this.enums.estadoUsuario.valores;
    }
    else if (enumerado == this.enums.rolUsuario.cod) {
      return this.enums.rolUsuario.valores;
    }

    else if (enumerado == null) {
      return false;
    }
    return false;
  };
  getEnumValString(array) {
    let lis = [];
    for (let ind in array) {
      let obj = {value: 0, label: ''};
      obj.value = array[ind].value.toString();
      obj.label = array[ind].label;
      lis.push(obj);
    }
    return lis;
  };
  getEmunName(enumerado, id) {
    let name = '';
    enumerado.forEach(function(obj) {
      if (obj.value == id) {
        name = obj.label;
      }
    })
    return name;
  };

  validaciones(objeto, path){
    let flag = true;
    let texto = '';

    if(path == 'usuario'){
      if(objeto.nombre.toString().length <= 0){
        flag = false;
        texto = texto + '[First Name] ';
      }
      if(objeto.apellido.toString().length <= 0){
        flag = false;
        texto = texto + '[Last Name] ';
      }
      if(objeto.usuario.toString().length <= 0){
        flag = false;
        texto = texto + '[User] ';
      }
      if(objeto.email.toString().length <= 0){
        flag = false;
        texto = texto + '[Email] ';
      }

      if(objeto.swAdministrador.toString().length <= 0){
        flag = false;
        texto = texto + '[Admin] ';
      }
      if(objeto.swActivo.toString().length <= 0){
        flag = false;
        texto = texto + '[Active] ';
      }
      if(objeto.estado.toString().length <= 0){
        flag = false;
        texto = texto + '[State] ';
      }
      if(objeto.rol.toString().length <= 0){
        flag = false;
        texto = texto + '[Role] ';
      }
    }
    else if(path == 'articulo'){
      if(objeto.titulo.toString().length <= 0){
        flag = false;
        texto = texto + '[Title] ';
      }
      if(objeto.resumen.toString().length <= 0){
        flag = false;
        texto = texto + '[Summary] ';
      }
      if(objeto.autor.toString().length <= 0){
        flag = false;
        texto = texto + '[Author] ';
      }
      if(objeto.tags.toString().length <= 0){
        flag = false;
        texto = texto + '[Tags] ';
      }
      if (typeof objeto.date != 'undefined'){
        if(objeto.date.toString().length <= 0){
          flag = false;
          texto = texto + '[Date] ';
        }
      }
      else{
          flag = false;
          texto = texto + '[Date] ';
      }
      if (typeof objeto.time != 'undefined'){
        if(objeto.time.toString().length <= 0){
          flag = false;
          texto = texto + '[Time] ';
        }
      }
      else{
          flag = false;
          texto = texto + '[Time] ';
      }
    }
    else if(path == 'categoria'){
      if(objeto.descripcion.toString().length <= 0){
        flag = false;
        texto = texto + '[Description] ';
      }
    }
    else if(path == 'personal'){
      if(objeto.nombre.toString().length <= 0){
        flag = false;
        texto = texto + '[First Name] ';
      }
      if(objeto.apellido.toString().length <= 0){
        flag = false;
        texto = texto + '[Last Name] ';
      }
      if(objeto.clave.toString().length <= 0){
        flag = false;
        texto = texto + '[Password] ';
      }
      if(objeto.email.toString().length <= 0){
        flag = false;
        texto = texto + '[Email] ';
      }
    }

    if(!flag){
      texto = texto + '-> Empty Values.';
      this.ocultarMostrarModal(this.const.idModal.warning, texto);
    }

    return flag;
  }

  //mostrar o ocultar un modal
  ocultarMostrarModal(idModal, cuerpoModal) {
    if (cuerpoModal != null) {
      this.cambiarTextoModal(idModal, cuerpoModal)
    }
    this.classToggleModalParam(idModal);
  };
  classToggleModal(idModal) {
    $('#' + idModal).toggleClass('show');
    $('#' + idModal).toggleClass('modalVisible');
  };
  classToggleModalParam(id) {
    $('#' + id).toggleClass('show');
    $('#' + id).toggleClass('modalVisible');
    return true;
  };
  tipoDeVariable(obj) {
    return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
  };
  cambiarTextoModal(idModal, cuerpoModal) {
    $('#' + idModal + ' .replc').html(function(buscayreemplaza, reemplaza) {
      return reemplaza.replace('XXX', cuerpoModal);
    });
  };

  clonarObj(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    var temp = obj.constructor();
    for (var key in obj) {
      temp[key] = this.clonarObj(obj[key]);
    }

    return temp;
  }

  abrirNav(event){
    let element = $(event.target);
    while(element.get(0).tagName.toString().toUpperCase() !== 'LI'){
      element = $(element).parent();
    }
    element.toggleClass('open');
  }

  abrirDropMenu(event){
    let element = $(event.target);
    let isOpened = element.get(0).getAttribute('aria-expanded');
    if(isOpened === 'true'){
      element.get(0).setAttribute('aria-expanded',false);
    }
    else{
      element.get(0).setAttribute('aria-expanded',true);
    }
    $(element).parent().toggleClass('open');
  }

  abrirDropButton(event){
    debugger;
    let element = $(event.target);

    while(element.get(0).tagName.toString().toUpperCase() !== 'BUTTON'){
      element = $(element).parent();
    }
    let isOpened = element.get(0).getAttribute('aria-expanded');
    if(isOpened === 'true'){
      element.get(0).setAttribute('aria-expanded',false);
    }
    else{
      element.get(0).setAttribute('aria-expanded',true);
    }
    element.parent().toggleClass('open');
  }

  getUrlActual(){
    let url = window.location.href.toString();
    return url.split('4200')[1];
  }

  showPopUpById(id){
    $('#'+id).fadeIn();
    $('#'+id).toggleClass('in');
    $('body').append($('<div>', {class: 'modal-backdrop fade in'}));
  }

  hidePopUpById(id){
    $('#'+id).fadeOut();
    $('#'+id).toggleClass('in');
    $('.modal-backdrop').remove();
  }

}
