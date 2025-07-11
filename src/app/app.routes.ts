import { Routes } from '@angular/router';
//Layouts
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

//paginas
import { HomeComponent }     from './home/home.component';
// Si ya creaste HomeComponent, descomenta la línea siguiente:
// import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
  path: '',                               // Rutas protegidas
    component: MainLayoutComponent,
    //canActivateChild:[AuthGuard], // // ← agrega tu guard cuando armes el login
    children:[
  { path: '', component: HomeComponent }, // Página principal
  { path: 'articulos', loadComponent: () => import('./articulo/articulo.component').then(m => m.ArticuloComponent) },
  { path: 'tipos', loadComponent: () => import('./ccmtpt/ccmtpt.component').then(m => m.CcmtptComponent) },
  { path: 'familias', loadComponent: () => import('./ccmfam/ccmfam.component').then(m => m.CcmfamComponent) },
  { path: 'clases', loadComponent: () => import('./ccmcla/ccmcla.component').then(m => m.CcmclaComponent) }
  // Si no usás HomeComponent todavía, podés dejarlo comentado o eliminar esta línea:
  // { path: '', component: HomeComponent },
    ],
  },
  {path: 'auth',                               // Rutas públicas
    component: AuthLayoutComponent,
    children: [
      { path: 'login', loadComponent: () => import('./sessions/login/login.component').then(m => m.LoginComponent) },
      { path: 'sign-up', loadComponent: () => import('./sessions/sign-up/sign-up.component').then(m => m.SignUpComponent) },
      { path: 'forgot', loadComponent: () => import('./sessions/forgot/forgot.component').then(m => m.ForgotComponent) },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

 