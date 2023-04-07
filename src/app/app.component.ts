import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  //HAY QUE TRABAJAR CON ESTRATEGIA OnPush (no el default) para la deteccion de cambio si es que ninguno de los componentes cambia y se renderiza solo y automaticamente.
  //Se utiliza esta estrategia principalmente a los que tienen Input y Output


}
