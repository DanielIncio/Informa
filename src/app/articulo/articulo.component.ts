// ✅ 1. IMPORTACIONES - SIEMPRE AL INICIO
import { Component } from '@angular/core';
import { InformaService } from '../services/informa.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink }  from '@angular/router';


// ✅ 2. INTERFACES (si son usadas solo en este archivo)

export interface CcmtptRef {
  mcodtpt: string;
}

export interface CcmfamRef {
  mcodfam: string;
}

export interface CcmclaRef {
  mcodcla: string;
}

export interface ArticuloSave {
  mcodart: string;
  mdescrip: string;
  mabrevi: string;
  munidad: string;
  ccmtpt: CcmtptRef;
  ccmfam: CcmfamRef;
  ccmcla: CcmclaRef;
}

// ✅ 3. COMPONENT DECORATOR - SIEMPRE JUSTO ANTES DE LA CLASE

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
  
})

// ✅ 4. CLASE PRINCIPAL - CON ESTRUCTURA CLARA

export class ArticuloComponent {

    // 4.1. 🧠 Variables públicas y modelos

      articulo:any=[]; //crear array de objetos empleados para realizar una consulta y guardarla en esta variable

      guardado: ArticuloSave = {
      mcodart: '',
      mdescrip: '',
      mabrevi: '',
      munidad: '',
      ccmtpt: { mcodtpt: '' },
      ccmfam: { mcodfam: '' },
      ccmcla: { mcodcla: '' }
      };

      modifica: ArticuloSave = {
      mcodart : '',
      mdescrip: '',
      mabrevi : '',
      munidad : '',
      ccmtpt  : { mcodtpt: '' },
      ccmfam  : { mcodfam: '' },
      ccmcla  : { mcodcla: '' }
      };

      familias:any[]=[];

      tipos:any[]=[];

      clases:any[]=[];

      // 4.2. 🧩 Constructor (inyección de dependencias)

      constructor(private servicios:InformaService){
      }

      // 4.3. 🚀 Ciclo de vida (ngOnInit)

      ngOnInit(){
      this.Listararti();
  
      }

      // 4.4. 🔁 Funciones públicas (ordenadas por acción)

      Listararti(){
        this.servicios.Listararti().subscribe(res =>this.articulo=res);
        this.servicios.ListarFamilias().subscribe(res => this.familias = res);
        this.servicios.ListarTipos().subscribe(res => this.tipos = res);
        this.servicios.ListarClases().subscribe(res => this.clases = res);

      }

      
  
     Guardararti() {
      this.servicios.Guardararti(this.guardado).subscribe(() => {
      this.Listararti();
      this.resetForm();             // ✅ reinicia correctamente
       });
      }
  
     Eliminararti(mcodart:any){
        this.servicios.Eliminararti(mcodart).subscribe(res=>this.Listararti());
      }
  
      Modificararti() {
      this.servicios.Modificararti(this.modifica).subscribe(() => {
      this.Listararti();
      this.resetForm();
       });
      }
  
     CopiarDatos(fila: any) {
     this.guardado = {
     mcodart : fila.mcodart,
     mdescrip: fila.mdescrip,
     mabrevi : fila.mabrevi,
     munidad : fila.munidad,
     ccmtpt  : this.tipos.find(t => t.mcodtpt === fila.ccmtpt.mcodtpt) || { mcodtpt: '' },
     ccmfam  : this.familias.find(f => f.mcodfam === fila.ccmfam.mcodfam) || { mcodfam: '' },
     ccmcla  : this.clases.find(c => c.mcodcla === fila.ccmcla.mcodcla) || { mcodcla: '' }
     };
    }

    // 4.5. 🔒 Funciones privadas o auxiliares (con `private`)

    private resetForm(): void {
    this.guardado = {
    mcodart : '',
    mdescrip: '',
    mabrevi : '',
    munidad : '',
    ccmtpt  : { mcodtpt: '' },   // ← solo el código
    ccmfam  : { mcodfam: '' },
    ccmcla  : { mcodcla: '' }
    };
    }

}
