import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {DataObjects} from '.././components/ObjectGeneric';

declare var $: any;

@Injectable()
export class LoginGuard implements CanActivate {
  usuario: any;
  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let URLactual = window.location.href;
    localStorage.setItem("mouseover","0");
    localStorage.setItem("mouseout","0");
    localStorage.setItem("datamaps","0");
    localStorage.setItem("charts","0");
    localStorage.setItem("verticalRangle","0");
    localStorage.setItem("passmeter", "0");
    localStorage.setItem("noty", "0");
    localStorage.setItem("code1","0");
    localStorage.setItem("code2","0");

    let sesionOK = true;
    if(!URLactual.includes("home") && URLactual !== 'http://localhost:4200/'){
      let usuarioSesion = localStorage.getItem('usuarioSesion') === null ? null : JSON.parse(localStorage.getItem('usuarioSesion').toString());
      sesionOK = false;

      if(usuarioSesion !== null){ 
        if(usuarioSesion.tbSesion !== undefined && usuarioSesion.tbSesion.tokenSesion !== null && usuarioSesion.tbSesion.tokenSesion.length > 0){
          if(usuarioSesion.tbSesion.activo !== null && usuarioSesion.tbSesion.activo === 1){
            if(usuarioSesion.tbSesion.mensajeErrorSesion === undefined || usuarioSesion.tbSesion.mensajeErrorSesion.length === 0 || usuarioSesion.tbSesion.mensajeErrorSesion === null){
              sesionOK = true;
            }
          }
        }
      }

      if(!sesionOK){
        this.router.navigate(['/home']);
        localStorage.clear();
        console.clear();
      }
    }

    return sesionOK;
  }
}
