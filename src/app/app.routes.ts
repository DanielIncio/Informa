import { Routes } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component';
// Si ya creaste HomeComponent, descomenta la línea siguiente:
// import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  // Si no usás HomeComponent todavía, podés dejarlo comentado o eliminar esta línea:
  // { path: '', component: HomeComponent },
  { path: '', component: ArticuloComponent }
];
