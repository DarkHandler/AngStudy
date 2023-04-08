import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithoutSaveGuard } from '../guards/without-save.guard';
import { DataResolverService } from '../resolvers/data.resolver.service';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  {
    path: '', 
    component: ContactComponent, 
    resolve: {departments: DataResolverService}, 
    canDeactivate: [WithoutSaveGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //se usa forChild por que es un modulo que angular no necesita generar un packate para necesitarlo enseguida
  exports: [RouterModule]
})
export class ContactRoutingModule { }
