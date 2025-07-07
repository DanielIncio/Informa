import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';   // ⬅️ importa la directiva

@Component({
  selector: 'app-home',
  standalone: true,             // ⬅️ ¡indispensable!
  imports: [RouterLink],        // ⬅️ poné aquí las directivas que uses
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']          // ⬅️ plural: styleUrls
})
export class HomeComponent {}
