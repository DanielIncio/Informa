import { Component } from '@angular/core';
import { EmpleadosService } from '../../empleados.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientes-listar',
  imports: [CommonModule,FormsModule],
  standalone: true,
  templateUrl: './clientes-listar.component.html',
  styleUrl: './clientes-listar.component.css'
})
export class ClientesListarComponent {
      clientes:any=[]; //crear objeto empleados para realizar una consulta y guardarla en esta variable
      contar:any=[];
      guardado:any={nombre:"",dni:"",distrito:"",estado:true}
      modifica:any={nombre:"",dni:"",distrito:"",estado:true}
      constructor(private servicios:EmpleadosService){
      }
    
      ngOnInit(){
        this.Listar();
        this.Count();
      }
    
      Listar(){
        this.servicios.ListarClientes().subscribe(res =>this.clientes=res);
      }

    GuardarCli(){

      if(this.guardado.nombre==""){
        alert("El campo Nombre esta vacio.");
        return
      }
      else if(this.guardado.dni==""){
        alert("El campo dni esta vacio.");
        return
      }
      else if(this.guardado.distrito==""){
        alert("El campo distrito esta vacio.");
        return
      }

      this.servicios.GuardarCli(this.guardado).subscribe(res =>{this.guardado=res;this.Listar();this.guardado={nombre:"",dni:"",distrito:"",estado:true}});
    }

    EliminarCli(id:number){
      this.servicios.EliminarCli(id).subscribe(res=>this.Listar());
    }

    ModificarCli(){
      this.servicios.ModificarCli(this.modifica).subscribe(res =>{this.modifica=res;this.Listar();this.guardado={nombre:"",dni:"",distrito:"",estado:true}});
    }

    CopiarDatosCli(chopyrata:any){
      this.guardado=chopyrata;
    }

      Count(){
        this.servicios.Count().subscribe(res =>{this.contar=res; console.log(this.contar)});
        

      }


}
