import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { FormsModule } from '@angular/forms';


//Con todo esto modularizamos nuestra aplicacion, en si un componente en realidad
//esto sirve para reutilizar codigo o hacer una library de un apartado de nuestra app
//ademas se gana en perfomance

@NgModule({
  declarations: [ContactComponent], //aqui debemos declarar nuestro formulario, y ya que se pone aqui, se saca del principal app.module.ts
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule //aqui es utiliza el formsModule, ya que no es reactiveFormModule en este caso por lo que se elimina tambien
  ]
})
export class ContactModule { }
