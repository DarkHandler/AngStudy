import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cities',
  template: `
    <!--Directiva de atributo-->
    <!--El otro es ngStyle pero no se usa mucho-->
    <li (click)="onCityClicked(city)" [ngClass]="{'selected': city === selection}">
      {{ city | titlecase }}
    </li>
  `,
  styleUrls: ['./cities.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesComponent {

  @Input() city!:string;
  @Input() selection!:string;
  @Output() cityClickedEvent = new EventEmitter<string>();

  onCityClicked(city:string):void{
    this.cityClickedEvent.emit(city);
  }


}
