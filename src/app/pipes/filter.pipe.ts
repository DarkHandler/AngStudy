import { Pipe, PipeTransform } from "@angular/core";

//este es un decorador que sirve para modificar el comportamiento de la clase
//pure por defecto es puro
@Pipe({
    name: 'filter',
})

export class FilterPipe implements PipeTransform{

    transform(values: string[], arg: string):string[] {
        if(!arg || arg?.length < 3) return values;

        let result:string[] = [];
        for(const value of values){
            if(value.toLowerCase().indexOf(arg.toLowerCase()) > -1){
                result = [...result, value];
            }
        }
        return result;
    }

}