import {Injectable} from '@angular/core';
export var url = 'http://localhost:8080/';

@Injectable()
export class DataObjects {

  getConst() {
    return {
      urlRestService: 'http://localhost:7001/Grad/rest/RestServices/',
      //Model rango de fechas para NGBDatePicker
      minDate: {year: 1000, month: 1, day: 1},
      maxDate: {year: 3000, month: 1, day: 1},
	  
      idiomaEs: 1,
      idiomaEn: 2,
      phaseAdd: 'add',
      phaseDelete: 'delete',
      phaseSearch: 'search',
      phaseEdit: 'edit',
      phasePlus: 'plus',
      tipoCampoTexto: 1,
      tipoCampoEnum: 2,
      disabled: 'disabled',
      readOnly: 'readOnly',
      idModal: {'info': 1, 'success': 2, 'warning': 3, 'danger': 4},
      actionModal: {'show': 1, 'hidde': 2},
      collectionSize: 0,
      maxSize: 1,
      rotate: true,
      pageSize: 1,
    }
  };

  getDataUsuario() {
    return {
        //Usuario
        idUsuario: '',
        usuario: '',
        clave: '',
        tipoDocumento: '',
        numeroDocumento: '',
        primerNombre: '',
        segundoNombre: '',
        primerApellido: '',
        segundoApellido: '',
        sexo: '',
        administrador: '',
        tokenSesion: '',
        tbSesion: this.getDataSesion(),
        mensajeErrorSesion: '',

        //Abstract
        estado: '',
        usuarioCreacion: '',
        fechaCreacion: '',
        usuarioActualiza: '',
        fechaActualiza: ''
    }
  };

  getDataSesion() {
    return {
        idSesion: '',
        tokenSesion: '',
        usuario: '',
        activo: '',

        //Abstract
        estado: '',
        usuarioCreacion: '',
        fechaCreacion: '',
        usuarioActualiza: '',
        fechaActualiza: ''
    }
  };

  getEnumerados() {
    let properties = this.getProperties(this.getConst().idiomaEs);
    return {
      sino: {
        cod: 1, valores: [
          {value: 1, label: properties.lbl_enum_si},
          {value: 0, label: properties.lbl_enum_no}
        ]
      },
      modulo: {
        cod: 2, valores: [
          {value: 1, label: properties.lbl_enum_modulo_tb_perfil},
          {value: 2, label: properties.lbl_enum_modulo_tb_usuario},
          {value: 3, label: properties.lbl_enum_modulo_tb_perfil_x_usuario}
        ]
      },
      sexo: {
        cod: 3, valores: [
          {value: 1, label: properties.lbl_enum_sexo_valor_masculino},
          {value: 2, label: properties.lbl_enum_sexo_valor_femenino},
          {value: 3, label: properties.lbl_enum_sexo_valor_ambos}
        ]
      },
      //valorIva: {cod: 25},

    }
  };

  getProperties(idioma) {
    let constant = this.getConst();
    return {
      lbl_info_sin_resultados: idioma == constant.idiomaEs ? 'Sin Resultados' : 'Without Results',
      lbl_info_fallo_conectar_base_datos: idioma == constant.idiomaEs ? 'No hay Conexión a la Base de Datos' : 'Without Conection to Data Base',
      lbl_info_cargando_resultados: idioma == constant.idiomaEs ? 'Cargando Resultados' : 'Loading Results',
      lbl_info_proceso_completo: idioma == constant.idiomaEs ? 'Proceso realizado Satisfactoriamente' : 'Process Complete',

      lbl_info_titulo_modal_error: idioma == constant.idiomaEs ? 'ERROR' : 'ERROR',
      lbl_info_titulo_modal_informacion: idioma == constant.idiomaEs ? 'INFROMACION' : 'INFORMATION',
      lbl_info_titulo_modal_advertencia: idioma == constant.idiomaEs ? 'ADVERTECNIA' : 'WARNING',
      lbl_info_titulo_modal_proceso_exitoso: idioma == constant.idiomaEs ? 'PROCESO EXITOSO' : 'PROCESS COMPLETE',

      //menu
      lbl_menu_usuario: idioma == constant.idiomaEs ? 'Usuarios' : 'Users',

      // actions
      lbl_btn_consultar: idioma == constant.idiomaEs ? 'Consultar' : 'Query',
      lbl_btn_edicion: idioma == constant.idiomaEs ? 'Agregar' : 'Add',
      lbl_btn_limpiar: idioma == constant.idiomaEs ? 'Limpiar' : 'Clean',
      lbl_btn_atras: idioma == constant.idiomaEs ? 'Atrás' : 'Back',
      lbl_btn_masivo: idioma == constant.idiomaEs ? 'Masivo' : 'Masive',
      lbl_btn_exportar: idioma == constant.idiomaEs ? 'Exportar' : 'Export',
      lbl_btn_importar: idioma == constant.idiomaEs ? 'Importar' : 'Import',
      lbl_btn_actualizar: idioma == constant.idiomaEs ? 'Actualizar' : 'Update',
      lbl_btn_ite_remover: idioma == constant.idiomaEs ? 'Remover' : 'Remove',
      lbl_btn_ite_agregar: idioma == constant.idiomaEs ? 'Agregar' : 'Add',

      //Titles
      lbl_tip_agregar: idioma == constant.idiomaEs ? 'Haga [Clic] para agregar un nuevo registro' : 'Click to add a new register',
      lbl_tip_editar: idioma == constant.idiomaEs ? 'Haga [Clic] para editar registro' : 'Click to edit the register selected',
      lbl_tip_eliminar: idioma == constant.idiomaEs ? 'Haga [Clic] para eliminar registro' : 'Click to delete the register selected',
      lbl_tip_buscar: idioma == constant.idiomaEs ? 'Haga [Clic] para buscar registros' : 'Click to search registers',
      lbl_tip_limpiar: idioma == constant.idiomaEs ? 'Haga [Clic] para limpiar' : 'Click to clean',
      lbl_tip_anterior: idioma == constant.idiomaEs ? 'Haga [Clic] para Regresas' : 'Click to go back',
      lbl_tip_actualizar: idioma == constant.idiomaEs ? 'Haga [Clic] para Actualizar' : 'Click to Update',

      //Enums
      lbl_enum_si: idioma == constant.idiomaEs ? 'Si' : 'Yes',
      lbl_enum_no: idioma == constant.idiomaEs ? 'No' : 'No',

      lbl_enum_modulo_test: idioma == constant.idiomaEs ? 'Test' : 'Test',
      lbl_enum_modulo_tb_perfil: idioma == constant.idiomaEs ? 'Perfil' : 'Profile',
      lbl_enum_modulo_tb_usuario: idioma == constant.idiomaEs ? 'Usuario' : 'User',
      lbl_enum_modulo_tb_perfil_x_usuario: idioma == constant.idiomaEs ? 'Perfil x Usuario' : 'Profile x User',

      lbl_enum_sexo_valor_masculino: idioma == constant.idiomaEs ? 'Masculino' : 'Man',
      lbl_enum_sexo_valor_femenino: idioma == constant.idiomaEs ? 'Femenino' : 'Femenino',
      lbl_enum_sexo_valor_ambos: idioma == constant.idiomaEs ? 'Ambos' : 'Ambos',

      // Usuario
      lbl_mtto_usuario_title: idioma == constant.idiomaEs ? 'Configuración de Usuarios' : 'Users Settings',
      lbl_mtto_usuario_nombre: idioma == constant.idiomaEs ? 'Nombre' : 'First Name',
      lbl_mtto_usuario_apellido: idioma == constant.idiomaEs ? 'Apellido' : 'Last Name',
      lbl_mtto_usuario_usuario: idioma == constant.idiomaEs ? 'Usuario' : 'User',
      lbl_mtto_usuario_email: idioma == constant.idiomaEs ? 'Email' : 'Email',
      lbl_mtto_usuario_estado: idioma == constant.idiomaEs ? 'Estado' : 'State',
      lbl_mtto_usuario_rol: idioma == constant.idiomaEs ? 'Rol' : 'Role',
      lbl_mtto_usuario_sw_administrador: idioma == constant.idiomaEs ? 'Administrador' : 'Admin',
      lbl_mtto_usuario_sw_activo: idioma == constant.idiomaEs ? 'Activo' : 'Active'
    }
  };
}
