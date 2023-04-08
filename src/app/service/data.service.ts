import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

export interface City{
  _id: string;
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly API = environment.api;

  constructor(private readonly http: HttpClient) { }


  //Todo esto es el CRUD normal
  addNewCity(city: string): Observable<City>{
    const body = {name: city};
    return this.http.post<City>(this.API, body);
  }

  getCities(): Observable<City[]>{
    return this.http.get<City[]>(this.API); //esto tienen opciones, opcionales que no se necesitan pasar
  }

  updateCity(city: City): Observable<void>{
    const body = {name: city.name};
    return this.http.put<void>(`${this.API}/${city._id}`, body);
  }

  deleteCity(id: string): Observable<void>{
    return this.http.delete<void>(`${this.API}/${id}`);
  }

}
