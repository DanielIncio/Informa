import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink }  from '@angular/router';
import { CcmclaService } from './ccmcla.service';
import { Ccmcla } from './ccmcla.model';


@Component({
  selector: 'app-ccmcla',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './ccmcla.component.html',
  styleUrl: './ccmcla.component.scss'
})
export class CcmclaComponent {
  ccmcla: Ccmcla[] = [];
  guardado: Ccmcla ={mcodcla:'',mdescrip:'',mabrevi:'',mcodtpt:'',mcodfam:'',mcoduser:'',mfecuact:'',mhoruact:''};
  modifica:Ccmcla ={...this.guardado};

      constructor(
        private ccmclaService: CcmclaService,

      ){}
      ngOnInit(){
      this.Listarccmcla();
      this.ccmclaService.list().subscribe(res => {
      this.ccmcla = res.map(c => ({
      ...c,
      mfecuact: c.mfecuact?.substring(0, 10) ?? ''
       }));
      });
  
      }

      Listarccmcla(){
        this.ccmclaService.list().subscribe(res => {
        this.ccmcla = res.map(c => ({
        ...c,
        mfecuact: c.mfecuact?.substring(0, 10) ?? ''
      }));
    });

      }

      
  
     Guardarccmcla() {
        this.ccmclaService.save(this.guardado).subscribe(() => {
        this.Listarccmcla();
        this.resetForm();
      });
      }
  
     Eliminarccmcla(mcodcla:any){
        this.ccmclaService.delete(mcodcla).subscribe(() => this.Listarccmcla());
      }
  
      Modificarccmcla() {
      this.ccmclaService.save(this.guardado).subscribe(() => {
      this.Listarccmcla();
      this.resetForm();
      });
      }
  
      CopiarDatos(fila: Ccmcla) {
      this.guardado = { ...fila };
      }   
      
      // 4.5. 🔒 Funciones privadas o auxiliares (con `private`)
      private resetForm(): void {
      this.guardado = {
       mcodcla:"",
       mdescrip:"",
       mabrevi:"",
       mcodtpt:"",
       mcodfam:"",
       mcoduser:"",
       mfecuact:"",
       mhoruact:""
      }
      }
    }



    




