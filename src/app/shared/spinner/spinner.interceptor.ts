import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor(private readonly spinnerSvc: SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //el next es que si todo se cumple de la manera que esperamos
    this.spinnerSvc.show(); //esto es para mostrar nuestro componente de servicio mientras carga
    return next.handle(request).pipe(
      finalize( ()=> this.spinnerSvc.hide())
    );
  }
}
