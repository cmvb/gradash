import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

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
    localStorage.setItem("code1","0");
    localStorage.setItem("code2","0");
    /*var admin = URLactual.indexOf('Mtto');
    if(admin >= 0){
      if (localStorage.getItem('usuario') == null) {
        this.router.navigate(['/home']);
        return false;
      }
      else {
        return true;
      }
    }
    else{
      return true;
    }*/
    return true;
  }
}
