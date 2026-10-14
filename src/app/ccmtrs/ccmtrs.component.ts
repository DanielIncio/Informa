import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink }  from '@angular/router';
import { CcmtrsService } from './ccmtrs.service';
import { Ccmtrs } from './ccmtrs.model';


@Component({
  selector: 'app-ccmtrs',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './ccmtrs.component.html',
  styleUrl: './ccmtrs.component.scss'
})
export class CcmtrsComponent {
  ccmtrs: Ccmtrs[] = [];
  guardado: Ccmtrs ={
     mcodtrsp: '',
     mnombre: '',
     mdirecc: '',
     mtelef1: '',
     mtelef2: '',
     mfax: '',
     mcodpai: '',
     mpersona: '',
     mructrsp: '',
     mfchregis: '',
     mplaca: '',
     mcapaci: '',
     mchofer: '',
     mcoduser: '',
     mfecuact: '',
     mhoruact: '',
     mcodcve: '',
     mcodutr: '',
     mlocalid: '',
     mindact: '',
     mtiptrsunat: '',
     mubigeo: ''
   };
  modifica:Ccmtrs ={...this.guardado};

      constructor(
        private ccmtrsService: CcmtrsService,

      ){}
      ngOnInit(){
      this.Listarccmtrs();
      this.ccmtrsService.list().subscribe(res => {
      this.ccmtrs = res.map(c => ({
      ...c,
      mfecuact: c.mfecuact?.substring(0, 10) ?? ''
       }));
      });
  
      }

      Listarccmtrs(){
        this.ccmtrsService.list().subscribe(res => {
        this.ccmtrs = res.map(c => ({
        ...c,
        mfecuact: c.mfecuact?.substring(0, 10) ?? ''
      }));
    });

      }

     Guardarccmtrs() {
        this.ccmtrsService.save(this.guardado).subscribe(() => {
        this.Listarccmtrs();
        this.resetForm();
      });
      }
  
     Eliminarccmtrs(mcodtrs:any){
        this.ccmtrsService.delete(mcodtrs).subscribe(() => this.Listarccmtrs());
      }
  
      Modificarccmtrs() {
      this.ccmtrsService.save(this.guardado).subscribe(() => {
      this.Listarccmtrs();
      this.resetForm();
      });
      }
  
      CopiarDatos(fila: Ccmtrs) {
      this.guardado = { ...fila };
      }   
      
      // 4.5. 🔒 Funciones privadas o auxiliares (con `private`)
      private resetForm(): void {
      this.guardado = {
       mcodtrsp: '',
       mnombre: '',
       mdirecc: '',
       mtelef1: '',
       mtelef2: '',
       mfax: '',
       mcodpai: '',
       mpersona: '',
       mructrsp: '',
       mfchregis: '',
       mplaca: '',
       mcapaci: '',
       mchofer: '',
       mcoduser: '',
       mfecuact: '',
       mhoruact: '',
       mcodcve: '',
       mcodutr: '',
       mlocalid: '',
       mindact: '',
       mtiptrsunat: '',
       mubigeo: ''
      }
      }
    }



    





