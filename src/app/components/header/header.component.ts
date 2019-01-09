import {Component, OnInit} from '@angular/core';
import {Util} from '../.././components/Util';
import {RestService} from '../.././services/rest.service';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [RestService]
})
export class HeaderComponent implements OnInit {
  util: any;
  data: any = [];
  usuario: any;

  constructor(public restService: RestService, util: Util) {
    this.util = util;
  }

  ngOnInit() {
  }

  /* method to call GET-API from rest.service */
  getExampleRest() {
    try {
      let url = "http://localhost:7001/Grad/rest/RestServices/findAllUsuarios";
      this.restService.getREST(url)
        .subscribe(resp => {
          console.log(resp, "res");
          this.data = resp;

          let i;
          for(i=0; i < this.data.length; i++){
            this.usuario = this.data[i];
          }

          console.log(this.data);
          console.log(this.usuario);
        },
        error => {
          console.log(error, "error");
        })
    } catch (e) {
      console.log(e);
    }
  }

  /* method to call POST-API from rest.service */
  postExampleRest() {
    try {
      let url = "http://localhost:7001/Grad/rest/RestServices/findAllUsuarios";
      let obj = {
        idUsuario: 1,
        usuario: "cmvb",
        clave: "1234",
        primerNombre: "Carlos",
        primerApellido: "Vera"
      }

      this.restService.postREST(url, obj)
        .subscribe(resp => {
          console.log(resp, "res");
          this.data = resp
        },
        error => {
          console.log(error, "error");
        })

        console.log(this.data);
    } catch (e) {
      console.log(e);
    }
  }

  /* method to call PUT-API from rest.service */
  putExampleRest() {
    try {
      let url = "http://localhost:7001/Grad/rest/RestServices/findAllUsuarios";
      let obj = {
        idUsuario: 1,
        usuario: "cmvb",
        clave: "1234",
        primerNombre: "Carlos",
        primerApellido: "Vera"
      }

      this.restService.putREST(url, obj)
        .subscribe(resp => {
          console.log(resp, "res");
          this.data = resp
        },
        error => {
          console.log(error, "error");
        })

        console.log(this.data);
    } catch (e) {
      console.log(e);
    }
  }

  /* method to call DELETE-API from rest.service */
  deleteExampleRest() {
    try {
      let url = "http://localhost:7001/Grad/rest/RestServices/findAllUsuarios";
      let id = 1;

      this.restService.deleteREST(url, id)
        .subscribe(resp => {
          console.log(resp, "res");
          this.data = resp
        },
        error => {
          console.log(error, "error");
        })

        console.log(this.data);
    } catch (e) {
      console.log(e);
    }
  }

  sidebarCollapse(){
    $("#sidebar").toggleClass("active");
    if($("#sidebar").hasClass("active")){
      $(".content-inner-all").css("margin-left", "80px" );
      $(".fixed-header-top").css("left", "80px" );
    }
    else{
      $(".content-inner-all").css("margin-left", "200px" );
      $(".fixed-header-top").css("left", "200px" );
    }
  }
}
