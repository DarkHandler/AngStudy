import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { UserComponent } from "./users/user/user.component";
import { ListComponent } from "./users/list/list.component";
import { DetailsComponent } from "./users/details/details.component";

const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path: 'contact-template/:id', component: ContactComponent},
    {path: 'contact-template', component: ContactComponent},
    {path: 'home', component: HomeComponent},
    {path: 'users', component:UserComponent,  //estas son rutas hijas
        children: [
            {path: 'list', component: ListComponent},
            {path: 'details', component: DetailsComponent},
    ]
    },
    {path: '**', component: PageNotFoundComponent},
];

//la primera ruta es en el caso de que no haga nada para mandarlo a una redireccion
//la pathMatch full significa que tiene que coincidir completamente con la ruta que se indico y no probar con las de abajo

//un decorador con configuracion que cambia el comportamiento de esta clase
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}