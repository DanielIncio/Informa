import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';   // 👈 IMPORT

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],   // 👈 LO DECLARAMOS AQUÍ
  template: `
    <router-outlet></router-outlet>  <!-- ✅ Esto reemplaza al <app-articulo> -->

  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}

