import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink }  from '@angular/router';
import { InmuniService } from './inmuni.service';
import { Inmuni } from './inmuni.model';


@Component({
  selector: 'app-inmuni',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './inmuni.component.html',
  styleUrl: './inmuni.component.scss'
})
export class InmuniComponent {
  inmuni: Inmuni[] = [];
  guardado: Inmuni ={
    mcodumed: '',
    mdescrip: '',
    mabrevi: '',
    mfactor: '',
    mporcen: '',
    munidad: '',
    msnr_ume: '',
    msnt_umext: ''
   };
  modifica:Inmuni ={...this.guardado};

      constructor(
        private inmuniService: InmuniService,

      ){}
      ngOnInit(){
      this.Listarinmuni();
      this.inmuniService.list().subscribe(res => {
      this.inmuni = res.map(c => ({
      ...c,
       }));
      });
  
      }

      Listarinmuni(){
        this.inmuniService.list().subscribe(res => {
        this.inmuni = res.map(c => ({
        ...c,
      }));
    });

      }

     Guardarinmuni() {
        this.inmuniService.save(this.guardado).subscribe(() => {
        this.Listarinmuni();
        this.resetForm();
      });
      }
  
     Eliminarinmuni(mcodumed:any){
        this.inmuniService.delete(mcodumed).subscribe(() => this.Listarinmuni());
      }
  
      Modificarinmuni() {
      this.inmuniService.save(this.guardado).subscribe(() => {
      this.Listarinmuni();
      this.resetForm();
      });
      }
  
      CopiarDatos(fila: Inmuni) {
      this.guardado = { ...fila };
      }   
      
      // 4.5. 🔒 Funciones privadas o auxiliares (con `private`)
      private resetForm(): void {
      this.guardado = {
       mcodumed: '',
       mdescrip: '',
       mabrevi: '',
       mfactor: '',
       mporcen: '',
       munidad: '',
       msnr_ume: '',
       msnt_umext: ''
      }
      }
    }



