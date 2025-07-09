import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink }  from '@angular/router';
import { CcmfamService } from './ccmfam.service';
import { Ccmfam } from './ccmfam.model';

@Component({
  selector: 'app-ccmfam',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './ccmfam.component.html',
  styleUrl: './ccmfam.component.scss'
})
export class CcmfamComponent {
  ccmfam: Ccmfam[] = [];
  guardado: Ccmfam ={mcodfam:'',mdescrip:'',mabrevi:'',mcodtpt:'',mcoduser:'',mfecuact:'',mhoruact:'',mnombre:''};
  modifica:Ccmfam ={...this.guardado};

      constructor(
        private ccmfamService: CcmfamService,

      ){}

      ngOnInit(){

      this.Listarccmfam();
      this.ccmfamService.list().subscribe(res => {
      this.ccmfam = res.map(c => ({
      ...c,
      mfecuact: c.mfecuact?.substring(0, 10) ?? ''
       }));
      });
  
      }

      Listarccmfam(){
        this.ccmfamService.list().subscribe(res => {
        this.ccmfam = res.map(c => ({
        ...c,
        mfecuact: c.mfecuact?.substring(0, 10) ?? ''
      }));
      });

      }

      
  
     Guardarccmfam() {
        this.ccmfamService.save(this.guardado).subscribe(() => {
        this.Listarccmfam();
        this.resetForm();
      });
      }
  
     Eliminarccmfam(mcodfam:any){
        this.ccmfamService.delete(mcodfam).subscribe(() => this.Listarccmfam());
      }
  
      Modificarccmfam() {
      this.ccmfamService.save(this.guardado).subscribe(() => {
      this.Listarccmfam();
      this.resetForm();
      });
      }
  
      CopiarDatos(fila: Ccmfam) {
      this.guardado = { ...fila };
      }   
      
      // 4.5. 🔒 Funciones privadas o auxiliares (con `private`)
      private resetForm(): void {
      this.guardado = {
       mcodfam:'',
       mdescrip:'',
       mabrevi:'',
       mcodtpt:'',
       mcoduser:'',
       mfecuact:'',
       mhoruact:'',
       mnombre:'',
      }
      }
    }

      

    



    





