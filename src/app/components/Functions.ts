import {Injectable} from '@angular/core';
declare var $: any;
//import {funciones} from '../../../src/assets/js/masterJS';
export var numeroDecimales = 2;

@Injectable()
export class Functions {
  //formatear numero segun la clase css
  autoFormat() {
    var listaElementos = $('.formatearNumero');
    //activar el metodo en diferentes eventos
    listaElementos.each(function(ind, e) {
      $(e).on('change keypress keyup', function() {
        this.value = procesaFormatearNumero(this, numeroDecimales);
      });
      e.value = procesaFormatearNumero(e, numeroDecimales);
      if (e.value == '') {
        e.value = 0;
      }
    });
  }

  onlyNumbers() {
    var listaElementos = $('.onlyNumbers');
    //activar el metodo en diferentes eventos
    listaElementos.each(function(ind, e) {
      $(e).on('change keypress keyup', function(event) {
        if (!onlyNumbers(event)) {
          return false;
        }
      });
      if (e.value == '') {
        e.value = 0;
      }
    });
  }

  onlyNumbersPlus() {
    var listaElementos = $('.onlyNumbersPlus');
    //activar el metodo en diferentes eventos
    listaElementos.each(function(ind, e) {
      $(e).on('change keypress keyup', function(event) {
        if (!onlyNumbersPlus(event)) {
          return false;
        }
      });
      if (e.value == '') {
        e.value = 0;
      }
    });
  }

  buscarYreemplazar(valorBuscar, valorReemplazar, valor) {
    var nuevoValor = valor;
    if (valor.toString().indexOf(valorBuscar) >= 0) {
      //si existe proceder a reemplazar
      nuevoValor = valor.replace(valorBuscar, valorReemplazar);
    }
    return nuevoValor;
  }

  tipoDeVariable(obj) {
    return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
  }

  revisarPermisos(url) {
   /* if (url.indexOf('ipsResetPass') < 0) {
      let objeto = JSON.parse(localStorage.getItem('usuario'));
      for (let i in objeto.permisos) {
        if (objeto.permisos[i].url.indexOf(url) > 0) {
          if (objeto.permisos[i].swSearch == 0) {
            inhabilitarAcciones("swBuscar");
          }
          if (objeto.permisos[i].swEdit == 0) {
            inhabilitarAcciones("swEditar");
          }
          if (objeto.permisos[i].swDelete == 0) {
            inhabilitarAcciones("swEliminar");
          }
          if (objeto.permisos[i].swAdd == 0) {
            inhabilitarAcciones("swCrear");
          }
          if (objeto.permisos[i].swExtra == 0) {
            inhabilitarAcciones("swExtra");
          }
        }
      }
    }*/
  }

  initEnums() {
    $('ng-select').each(function(index, element) {
      let select = $(element);
      /*if(!select.value){
        select.value = select.find('option')[0].value;
        select.attr('ng-reflect-model',select.find('option')[0].value);
        console.log(select.find('option')[0]);
        let option = select.find('option')[0];
        $(option).attr('ng-selected',true);
      }*/
    })
  };
}



export function inhabilitarAcciones(clase) {
  var listaElementos = $('.' + clase);
  //activar el permiso en diferentes acciones
  listaElementos.each(function(ind, obj) {
    $(obj).addClass('pointer-event-none');
    $(obj).on('click', function(event) {
      $(this).attr('disabled', true);
      return false;
    });

    if ($(obj).hasClass('zona-drop')) {
      $(obj).addClass('ocultar');
    }

    if ($(obj).hasClass('zona-drop-clean')) {
      $(obj).removeClass('ocultar');
    }
  });
  return true;
}

//Formate un numero sin signo, trabaja con dos decimales. Ej: 456.123,45, recibe 456123.45
//Recibe una cadena
export function procesaFormatearNumero(campo, decimales) {
  var i = 0;
  var antiguaCadenaN = "";
  var antiguaCadenaF = "";
  var cadena = "";

  cadena = campo.value;
  if (cadena == antiguaCadenaN) {
    return cadena;
  }

  var prefijo = "";
  if (cadena.length > 0) {
    if (cadena.charAt(0) == '+' || cadena.charAt(0) == '-') {
      prefijo = cadena.charAt(0);
      cadena = cadena.substring(1, cadena.length);
    }
  }

  // Analizar que solo puedan digitar 0...9 o , o -
  for (i = 0; i < cadena.length; i++) {
    switch (cadena.charAt(i)) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        break;
      case ',':
        if (i > 0)
          break;
      default:
        // Quitar el caracter
        cadena = cadena.substring(0, i)
          + cadena.substring(i + 1, cadena.length);
        i--;

    }
  }
  // Solo una coma
  if (cadena.indexOf(',') != cadena.lastIndexOf(',')) {
    // Dejar la ultima , .
    cadena = cadena.substring(0, cadena.indexOf(','))
      + cadena.substring(cadena.indexOf(',') + 1, cadena.length);
  }
  var sinPuntos = cadena.split('.');
  cadena = "";
  for (i = 0; i < sinPuntos.length; i++) {
    cadena = cadena + sinPuntos[i];
  }
  // Eliminar los ceros no significativos.
  var cero = 0;
  if (cadena.length > 1) {
    cero = -1;
    for (i = 0; i < cadena.length; i++) {
      if (cadena.charAt(i) == '0')
        cero = i;
      else if (cadena.charAt(i) == ',')
        break;
      else
        break;
    }

    cadena = cadena.substring(cero + 1);
    cadena = cadena.charAt(0) == ',' ? "0" + cadena : cadena; // Para que
    // no quede
    // ,5 sino
    // 0,5
  }

  // Solo cuatro decimales.
  var pos = cadena.lastIndexOf(",");

  if (-1 != pos) {
    // Existe la coma.
    var posF = pos + decimales;
    var longitud = cadena.length - 1;
    if (posF < longitud) {
      // Se debe cortar en los decimales.
      cadena = cadena.substring(0, posF + 1);
    }
  }

  if (-1 == pos) {
    // No hay ,
    var primerPunto = cadena.length % 3;
    var complemento = "";
  } else {
    complemento = cadena.substring(pos, cadena.length);
    primerPunto = pos % 3;
  }

  primerPunto = primerPunto == 0 ? 3 : primerPunto;
  pos = pos == -1 ? cadena.length : pos;

  var nuevaCadena = "";
  for (var i = 0, j = 0; i < pos; i++) {
    if (j == primerPunto) {
      nuevaCadena = nuevaCadena + ".";
      primerPunto = primerPunto + 3;
    }
    nuevaCadena = nuevaCadena + cadena.charAt(i);
    j++;
  }
  cadena = prefijo + nuevaCadena + complemento;
  campo.value = cadena;
  antiguaCadenaN = cadena;
  return cadena;
}

export function onlyNumbers(e) {
  var key = e.keyCode || e.which;
  var keyboard = String.fromCharCode(key).toLowerCase();
  var letters = " 0123456789";
  var specials = [8, 37, 39, 46];

  var special_key = false
  for (var i in specials) {
    if (key == specials[i]) {
      special_key = true;
      break;
    }
  }

  if (letters.indexOf(keyboard) == -1 && !special_key) {
    return false;
  }
  return true;
}

export function onlyNumbersPlus(e) {
  var key = e.keyCode || e.which;
  var keyboard = String.fromCharCode(key).toLowerCase();
  var letters = " 0123456789-.,";
  var specials = [8, 37, 39, 46];

  var special_key = false
  for (var i in specials) {
    if (key == specials[i]) {
      special_key = true;
      break;
    }
  }

  if (letters.indexOf(keyboard) == -1 && !special_key) {
    return false;
  }
  return true;
}
