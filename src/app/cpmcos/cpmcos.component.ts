import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink }  from '@angular/router';
import { CpmcosService } from './cpmcos.service';
import { Cpmcos } from './cpmcos.model';


@Component({
  selector: 'app-cpmcos',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './cpmcos.component.html',
  styleUrl: './cpmcos.component.scss'
})
export class CpmcosComponent {
  cpmcos: Cpmcos[] = [];
  guardado: Cpmcos ={
    mcodcos: '',
    mdescrip: '',
    mabrevi: '',
    mindmod: '',
    mcoduser: '',
    mfecuact: '',
    mhoruact: ''
   };
  modifica:Cpmcos ={...this.guardado};

      constructor(
        private cpmcosService: CpmcosService,

      ){}
      ngOnInit(){
      this.Listarcpmcos();
      this.cpmcosService.list().subscribe(res => {
      this.cpmcos = res.map(c => ({
      ...c,
      mfecuact: c.mfecuact?.substring(0, 10) ?? ''
       }));
      });
  
      }

      Listarcpmcos(){
        this.cpmcosService.list().subscribe(res => {
        this.cpmcos = res.map(c => ({
        ...c,
        mfecuact: c.mfecuact?.substring(0, 10) ?? ''
      }));
    });

      }

     Guardarcpmcos() {
        this.cpmcosService.save(this.guardado).subscribe(() => {
        this.Listarcpmcos();
        this.resetForm();
      });
      }
  
     Eliminarcpmcos(mcodcos:any){
        this.cpmcosService.delete(mcodcos).subscribe(() => this.Listarcpmcos());
      }
  
      Modificarcpmcos() {
      this.cpmcosService.save(this.guardado).subscribe(() => {
      this.Listarcpmcos();
      this.resetForm();
      });
      }
  
      CopiarDatos(fila: Cpmcos) {
      this.guardado = { ...fila };
      }   
      
      // 4.5. 🔒 Funciones privadas o auxiliares (con `private`)
      private resetForm(): void {
      this.guardado = {
       mcodcos: '',
       mdescrip: '',
       mabrevi: '',
       mindmod: '',
       mcoduser: '',
       mfecuact: '',
       mhoruact: ''
      }
      }
    }



    







