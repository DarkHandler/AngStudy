import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable, of } from "rxjs"; // de (Reactive Extensions for JavaScript)


const department = ['Marketing', 'Sales', 'HR', 'Others'];

@Injectable({ providedIn: 'root'})
export class DataResolverService implements Resolve<any>{
    resolve(): Observable<any>{
        //todo: call service
        return of(department); //of viene de rxjs, y convierte mi array en un observable
    }

}