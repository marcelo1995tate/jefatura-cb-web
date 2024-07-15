import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogueadoElectroGuard implements CanActivate {
  constructor(private router:Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    let dato = localStorage.getItem('planificacion-electro');

    if (dato){
      return true;
    }
    else {
      this.router.navigate(['electro','login']);
        return false;
    }
  }

}

