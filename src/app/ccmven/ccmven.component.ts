import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink }  from '@angular/router';
import { CcmvenService } from './ccmven.service';
import { Ccmven } from './ccmven.model';


@Component({
  selector: 'app-ccmven',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './ccmven.component.html',
  styleUrl: './ccmven.component.scss'
})
export class CcmvenComponent {
  ccmven: Ccmven[] = [];
  guardado: Ccmven ={
    mcodven: '',
    mnombre: '',
    mdirecc: '',
    mdociden: '',
    mporcen: 0,
    mtipven: '',
    mcodgve: '',
    mcodjve: '',
    mfcacomi: '',
    mcoduser: '',
    mfecuact: '',
    mhoruact: '',
    mindcom: '',
    mindvend: '',
    msituac: '',
    mclave: ''
   };
  modifica:Ccmven ={...this.guardado};

      constructor(
        private ccmvenService: CcmvenService,

      ){}
      ngOnInit(){
      this.Listarccmven();
      this.ccmvenService.list().subscribe(res => {
      this.ccmven = res.map(c => ({
      ...c,
      mfecuact: c.mfecuact?.substring(0, 10) ?? ''
       }));
      });
  
      }

      Listarccmven(){
        this.ccmvenService.list().subscribe(res => {
        this.ccmven = res.map(c => ({
        ...c,
        mfecuact: c.mfecuact?.substring(0, 10) ?? ''
      }));
    });

      }

     Guardarccmven() {
        this.ccmvenService.save(this.guardado).subscribe(() => {
        this.Listarccmven();
        this.resetForm();
      });
      }
  
     Eliminarccmven(mcodven:any){
        this.ccmvenService.delete(mcodven).subscribe(() => this.Listarccmven());
      }
  
      Modificarccmven() {
      this.ccmvenService.save(this.guardado).subscribe(() => {
      this.Listarccmven();
      this.resetForm();
      });
      }
  
      CopiarDatos(fila: Ccmven) {
      this.guardado = { ...fila };
      }   
      
      // 4.5. 🔒 Funciones privadas o auxiliares (con `private`)
      private resetForm(): void {
      this.guardado = {
       mcodven: '',
       mnombre: '',
       mdirecc: '',
       mdociden: '',
       mporcen: 0,
       mtipven: '',
       mcodgve: '',
       mcodjve: '',
       mfcacomi: '',
       mcoduser: '',
       mfecuact: '',
       mhoruact: '',
       mindcom: '',
       mindvend: '',
       msituac: '',
       mclave: ''
      }
      }
    }



    






