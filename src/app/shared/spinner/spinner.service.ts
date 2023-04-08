import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  isLoading$ = new Subject<boolean>(); //el signo dolar $ significa que es una convencion de un Observable
  
  show(): void{
    this.isLoading$.next(true);
  }; //mostrara nuestro loading

  hide(): void{
    this.isLoading$.next(false);
  }; //ocultara nuestro loading


}
