import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink }  from '@angular/router';
import { CcmtptService } from './ccmtpt.service';
import { Ccmtpt } from './ccmtpt.model';

@Component({
  selector: 'app-ccmtpt',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './ccmtpt.component.html',
  styleUrl: './ccmtpt.component.scss'
})
  export class CcmtptComponent {
  ccmtpt: Ccmtpt[] = [];
  guardado: Ccmtpt ={mcodtpt:'',mdescrip:'',mabrevi:'',mcoduser:'',mfecuact:'',mhoruact:''};
  modifica:Ccmtpt ={...this.guardado};

      constructor(
        private ccmtptService: CcmtptService,

      ){}

      ngOnInit(){

      this.Listarccmtpt();
      this.ccmtptService.list().subscribe(res => {
      this.ccmtpt = res.map(c => ({
      ...c,
      mfecuact: c.mfecuact?.substring(0, 10) ?? ''
       }));
      });
  
      }

      Listarccmtpt(){
        this.ccmtptService.list().subscribe(res => {
        this.ccmtpt = res.map(c => ({
        ...c,
        mfecuact: c.mfecuact?.substring(0, 10) ?? ''
      }));
      });

      }

      
  
     Guardarccmtpt() {
        this.ccmtptService.save(this.guardado).subscribe(() => {
        this.Listarccmtpt();
        this.resetForm();
      });
      }
  
     Eliminarccmtpt(mcodtpt:any){
        this.ccmtptService.delete(mcodtpt).subscribe(() => this.Listarccmtpt());
      }
  
      Modificarccmtpt() {
      this.ccmtptService.save(this.guardado).subscribe(() => {
      this.Listarccmtpt();
      this.resetForm();
      });
      }
  
      CopiarDatos(fila: Ccmtpt) {
      this.guardado = { ...fila };
      }   
      
      // 4.5. 🔒 Funciones privadas o auxiliares (con `private`)
      private resetForm(): void {
      this.guardado = {
       mcodtpt:'',
       mdescrip:'',
       mabrevi:'',
       mcoduser:'',
       mfecuact:'',
       mhoruact:'',

      }
      }

}


  
  

      

    



    





