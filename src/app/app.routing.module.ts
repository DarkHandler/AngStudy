import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { UserComponent } from "./users/user/user.component";
import { ListComponent } from "./users/list/list.component";
import { DetailsComponent } from "./users/details/details.component";
import { PermissionsGuard } from "./guards/permissions.guard";
import { WithoutSaveGuard } from "./guards/without-save.guard";
import { DataResolverService } from "./resolvers/data.resolver.service";

const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    //can deactivate es asegurarse de que el usuario puede dejar esa ruta
    /* {
        path: 'contact-template/:id', 
        component: ContactComponent, 
        resolve: {departments: DataResolverService}, 
        canDeactivate: [WithoutSaveGuard]}, */
    {path: 'contact-template/:id', loadChildren: ()=> 
        import('./contact/contact.module').then(m => m.ContactModule) //recibimos un modulo y este es el contactModule
    }, //utilizamos sintaxis de dynamic import
    //{path: 'contact-template', component: ContactComponent},
    {path: 'home', component: HomeComponent},
    //el guard protege a las rutas hijas tambien
    {path: 'users', component:UserComponent, canActivate: [ PermissionsGuard ], //estas son rutas hijas pero le pondremos guards para asegurar los permisos de acceso
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