import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoLogueadoGuard implements CanActivate {
  constructor(private router:Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    let dato = localStorage.getItem('planificacion');

    if (!dato){
      return true;
    }
    else {
      this.router.navigate(['/planificaciones']);
      return false;
    }
  }

}
