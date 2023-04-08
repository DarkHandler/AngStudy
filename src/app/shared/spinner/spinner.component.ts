import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';

//isLoading$ | async --> esto lo que hace es suscribirse cuando este esperando el valor y desuscribirse cuando ya no lo necesite

@Component({
  selector: 'app-spinner',
  template: `
  <div class="overlay" *ngIf="isLoading$ | async">
    <div class="lds-heart">
      <div></div>
    </div>
  </div>
  `,
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  isLoading$ = this.spinnerSvc.isLoading$; //sacamos nuestra propiedad

  constructor(private readonly spinnerSvc: SpinnerService){}

}
