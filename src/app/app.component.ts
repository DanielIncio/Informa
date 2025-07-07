import { Component } from '@angular/core';
import { ArticuloComponent } from './articulo/articulo.component';   // 👈 IMPORT

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ArticuloComponent],   // 👈 LO DECLARAMOS AQUÍ
  template: `
    <!-- app.component.html en línea -->
    <app-articulo></app-articulo>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
