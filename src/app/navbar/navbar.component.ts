import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private readonly router:Router){}

  goToTemplateDriven(): void{
    //this.router.navigate(['contact-template'], {queryParams:{ name: "AngStudy" }}) //con params
    this.router.navigate(['contact-template', '123']) //con ruta dinamica

  }

}
