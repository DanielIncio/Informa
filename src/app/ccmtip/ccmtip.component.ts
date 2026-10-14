import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink }  from '@angular/router';
import { CcmtipService } from './ccmtip.service';
import { Ccmtip } from './ccmtip.model';


@Component({
  selector: 'app-ccmtip',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './ccmtip.component.html',
  styleUrl: './ccmtip.component.scss'
})
export class CcmtipComponent {
  ccmtip: Ccmtip[] = [];
  guardado: Ccmtip ={
    mtipotran: '',
    mdescrip: '',
    mabrevi: '',
    mingsal: '',
    mindvalor: '',
    mindcanti: '',
    mindrelac: '',
    mindtrnsf: '',
    mindsunat: '',
    mttransr: '',
    mindoper: '',
    mindcclte: '',
    mindctrla: '',
    mindacp: '',
    mcodsunat: '',
    mdessunat: '',
    mcoduser: '',
    msnt_toa: '',
    mindautis: '',
    mfecuact: '',
    mhoruact: '',
    mindica: ''
   };
  modifica:Ccmtip ={...this.guardado};

      constructor(
        private ccmtipService: CcmtipService,

      ){}
      ngOnInit(){
      this.Listarccmtip();
      this.ccmtipService.list().subscribe(res => {
      this.ccmtip = res.map(c => ({
      ...c,
      mfecuact: c.mfecuact?.substring(0, 10) ?? ''
       }));
      });
  
      }

      Listarccmtip(){
        this.ccmtipService.list().subscribe(res => {
        this.ccmtip = res.map(c => ({
        ...c,
        mfecuact: c.mfecuact?.substring(0, 10) ?? ''
      }));
    });

      }

      
  
     Guardarccmtip() {
        this.ccmtipService.save(this.guardado).subscribe(() => {
        this.Listarccmtip();
        this.resetForm();
      });
      }
  
     Eliminarccmtip(mcodtip:any){
        this.ccmtipService.delete(mcodtip).subscribe(() => this.Listarccmtip());
      }
  
      Modificarccmtip() {
      this.ccmtipService.save(this.guardado).subscribe(() => {
      this.Listarccmtip();
      this.resetForm();
      });
      }
  
      CopiarDatos(fila: Ccmtip) {
      this.guardado = { ...fila };
      }   
      
      // 4.5. 🔒 Funciones privadas o auxiliares (con `private`)
      private resetForm(): void {
      this.guardado = {
      mtipotran: '',
      mdescrip: '',
      mabrevi: '',
      mingsal: '',
      mindvalor: '',
      mindcanti: '',
      mindrelac: '',
      mindtrnsf: '',
      mindsunat: '',
      mttransr: '',
      mindoper: '',
      mindcclte: '',
      mindctrla: '',
      mindacp: '',
      mcodsunat: '',
      mdessunat: '',
      mcoduser: '',
      msnt_toa: '',
      mindautis: '',
      mfecuact: '',
      mhoruact: '',
      mindica: ''
      }
      }
    }



    




