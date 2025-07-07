import { Routes } from '@angular/router';
import { HomeComponent }     from './home/home.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { CcmtptComponent }   from './ccmtpt/ccmtpt.component';
import { CcmfamComponent }   from './ccmfam/ccmfam.component';
import { CcmclaComponent }    from './ccmcla/ccmcla.component';
// Si ya creaste HomeComponent, descomenta la línea siguiente:
// import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página principal
  { path: 'articulos', component: ArticuloComponent },
  { path: 'tipos', component: CcmtptComponent },
  { path: 'familias', component: CcmfamComponent },
  { path: 'clases', component: CcmclaComponent },
  // Si no usás HomeComponent todavía, podés dejarlo comentado o eliminar esta línea:
  // { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' , component: HomeComponent }
];

 