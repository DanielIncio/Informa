import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink }  from '@angular/router';
import { CcmalmService } from './ccmalm.service';
import { Ccmalm } from './ccmalm.model';


@Component({
  selector: 'app-ccmalm',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './ccmalm.component.html',
  styleUrl: './ccmalm.component.scss'
})
export class CcmalmComponent {
  ccmalm: Ccmalm[] = [];
  guardado: Ccmalm ={
    mcodalm: '',
    mdescrip: '',
    mdirecc: '',
    mcoduser: '',
    mfecuact: '',
    mhoruact: '',
    mindubi: '',
    mindisp: '',
    minddpr: '',
    mindpase: '',
    msituac: '',
    mindica: ''
    };
  modifica:Ccmalm ={...this.guardado};

      constructor(
        private ccmalmService: CcmalmService,

      ){}
      ngOnInit(){
      this.Listarccmalm();
      this.ccmalmService.list().subscribe(res => {
      this.ccmalm = res.map(c => ({
      ...c,
      mfecuact: c.mfecuact?.substring(0, 10) ?? ''
       }));
      });
  
      }

      Listarccmalm(){
        this.ccmalmService.list().subscribe(res => {
        this.ccmalm = res.map(c => ({
        ...c,
        mfecuact: c.mfecuact?.substring(0, 10) ?? ''
      }));
    });

      }

      
  
     Guardarccmalm() {
        this.ccmalmService.save(this.guardado).subscribe(() => {
        this.Listarccmalm();
        this.resetForm();
      });
      }
  
     Eliminarccmalm(mcodalm:any){
        this.ccmalmService.delete(mcodalm).subscribe(() => this.Listarccmalm());
      }
  
      Modificarccmalm() {
      this.ccmalmService.save(this.guardado).subscribe(() => {
      this.Listarccmalm();
      this.resetForm();
      });
      }
  
      CopiarDatos(fila: Ccmalm) {
      this.guardado = { ...fila };
      }   
      
      // 4.5. 🔒 Funciones privadas o auxiliares (con `private`)
      private resetForm(): void {
      this.guardado = {
        mcodalm: '',
        mdescrip: '',
        mdirecc: '',
        mcoduser: '',
        mfecuact: '',
        mhoruact: '',
        mindubi: '',
        mindisp: '',
        minddpr: '',
        mindpase: '',
        msituac: '',
        mindica: ''
        }
      }
    }



    




