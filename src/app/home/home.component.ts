import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name!: string; //Two-way data binding
  selection!:string; //event binding
  cities = ['Barcelona','Madrir','Lima'];
  title = 'angStudy';
  criteria = '';

  addNewCity(city:string):void{
    this.cities.push(city);
  }

  onCityClicked(city:string):void{
    console.log('City->', city);
    this.selection = city;
  }

  clearSelection(){
    this.selection = '';
  }

  onSearch(){
    console.log("Buscador");
  }


}
