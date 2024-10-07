import { Routes } from '@angular/router';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';

     
export const routes: Routes = [
    {path:'productos',component:ProductoListaComponent},
    {path: '',redirectTo:'productos',pathMatch:'full'},
    {path : 'agregar',component:AgregarComponent},
    {path : 'editar/:id',component:EditarComponent}
];
