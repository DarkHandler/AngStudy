import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

interface ContactForm
{
  "name": string,
  "checkAdult": boolean,
  "department": string,
  "comment": string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  
  id!: string;
  personName!: string;
  
  model = {
    name: "",
    checkAdult: false,
    department: "",
    comment: ""
  }

  constructor(private readonly route: ActivatedRoute){}  

  ngOnInit(): void{
    //esto de queryParams tiene un observable, que es similar a una promesa, pero puede emitir varias veces y otras diferencias
    this.route.queryParams.subscribe((params: Params) =>{ //cuando se utiliza queryParams
        this.personName = params['name']; //cuando me pasa un parametro tipo name
    });
      
    //esto se utiliza solo para cuando la ruta viene dada asi /:id
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']//cuando me pasa el parametro tipo id, pero asisnandole nombre antes en routing.modules, no navbar
    });

  }

  onSubmit(values: any): void{
    console.log('Form values', values);
  }

}
