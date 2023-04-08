import { Pipe, PipeTransform } from "@angular/core";
import { City } from "../service/data.service";

//este es un decorador que sirve para modificar el comportamiento de la clase
//pure por defecto es puro
@Pipe({
    name: 'filter',
})

export class FilterPipe implements PipeTransform{

    transform(cities: City[], arg: string): City[] {
        if(!arg || arg?.length < 3) return cities;

        let result: City[] = [];
        for(const city of cities){
            if(city.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
                result = [...result, city];
            }
        }
        return result;
    }

}