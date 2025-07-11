import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 👈 ESTE es el que necesitás

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterModule], // 👈 IMPORTÁ RouterModule acá
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent {}