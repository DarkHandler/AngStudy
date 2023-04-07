import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, config } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//esta interfaz se suele utilizar con formularios para decirle al usuario que no se vaya cuando tenga rellenado campos en el form
//pero aqui no lo haremos asi
export class WithoutSaveGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.hasUser()){
        return true;
      }
      return confirm('You have unsaved changes'); // esto es un booleano que devuelve true o false
  }
  
  hasUser(): boolean{
    return false;
  }

}
