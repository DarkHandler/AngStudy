import { Component, OnInit } from '@angular/core';
import { City, DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  //AQUI LOS DEJE INICIALIZADOS PARA QUE NO ME LESIARA
  name: string = ''; //Two-way data binding
  //selection!:string; //event binding
  selection: City = {_id: '', name: ''};
  //cities = ['Barcelona','Madrir','Lima'];
  cities: City[] = [];
  
  title = 'angStudy';
  criteria = '';

  constructor(private readonly dataSvc: DataService){} //en nuestro cons debemos hacer la inyeccion de nuestro service

  ngOnInit(): void {
    this.dataSvc.getCities()
    .subscribe( cities => {
      this.cities = [...cities] //cities es la response del metodo getCities al que no suscribimos para recibir datos
    }) //esto es un obserbable
    
  }

  updateCity(city: City): void{
    this.dataSvc.updateCity(city).subscribe( () => {
      const tempArray = this.cities.filter( item => item._id !== city._id); //devuelvenos todo lo que sea distinto a lo que se ha eliminado
      this.cities = [...tempArray, city];
      this.clearSelection();
    });
  }

  addNewCity(city: string):void{
    //this.cities.push(city);
    this.dataSvc.addNewCity(city).subscribe( res => {
      this.cities.push(res);
    });
  }

  onCitySelected(city: City):void{
    //console.log('City->', city);
    this.selection = city;
  }

  clearSelection(): void{
    //this.selection = '';
    this.selection = {
      _id: '',
      name: ''
    };
  }

  onSearch(){
    console.log("Buscador");
  }

  onCityDelete(id: string): void{
    //console.log('id', id);
    if(confirm('Are your sure?')){
      this.dataSvc.deleteCity(id).subscribe( () => { //el response no nos vale de nada
        //si llegamos aca dentro todo ha ido bien
        //la api si todo ha ido bien en la eliminacion nos devuelve un 1
        const tempArray = this.cities.filter( city => city._id !== id); //tendriamos todas las ciudades que no sean la que se pidio eliminar
        this.cities = [...tempArray];
        this.clearSelection();
      });
    }
  }

}
