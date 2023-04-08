import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { City } from '../service/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewItemComponent {

  @Input() label!:string;
  @Input() className = "nada";
  @Input() selection!: City; //se ncesita para saber cuando un usuario selecciona una ciudad

  
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<City>();

  onAddNewItem(item: string):void{
    //console.log('Item-->', item);
    this.newItemEvent.emit(item);
  }

  onUpdateItem(item: City, change: string):void{
    //console.log('item', item);
    //console.log('change', change);
    const city: City = {
      _id: item._id,
      name: change
    };
    this.updateItemEvent.emit(city);
  }

}
