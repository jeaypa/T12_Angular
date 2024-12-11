import { Routes } from '@angular/router';
import { FormularioArticulosComponent } from './formulario-articulos/formulario-articulos.component';
import { TablaArticulosComponent } from './tabla-articulos/tabla-articulos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/tabla', pathMatch: 'full' },
  { path: 'tabla', component: TablaArticulosComponent },
  { path: 'formulario', component: FormularioArticulosComponent }
];
