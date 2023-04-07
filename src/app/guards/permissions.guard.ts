import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//CanActivate es la interfaz que permite a un usuario o no a un usuario acceder a una determinada ruta
export class PermissionsGuard implements CanActivate {
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.hasUser()){
      return true;
    }
    //Redireccion a login
    alert('You don`t have permissions')
    return false;
  }

  //al no tener sistema de login, lo simularemos con lo siguiente
  hasUser(): boolean{
    return false;
  }
  
}
