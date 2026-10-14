import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InformaService {

   private apiurl="http://localhost:9999";

  constructor(private http:HttpClient) { }
   
  Listar() {
    return this.http.get(this.apiurl +"/api/empleado")

  }
   
   Guardar(Empleados:any) {
    return this.http.post(this.apiurl +"/api/empleado", Empleados)
   }

   Eliminar(id:number){
    return this.http.delete(this.apiurl +"/api/empleado/"+id ) 
   }

   Modificar(Empleados:any){
    return this.http.put(this.apiurl +"/api/empleado", Empleados)
   }

  ListarClientes(){
        
    return this.http.get(this.apiurl +"/api/clientes/lista")

  }

   GuardarCli(Clientes:any) {
    return this.http.post(this.apiurl +"/api/clientes", Clientes)
   }

   EliminarCli(id:number){
    return this.http.delete(this.apiurl +"/api/clientes/"+id ) 
   }

   ModificarCli(Clientes:any){
    return this.http.put(this.apiurl +"/api/clientes", Clientes)
   }

  Count(){
    return this.http.get(this.apiurl +"/api/clientes/count")
  }

  ListarFamilias() {
  return this.http.get<any[]>(this.apiurl +"/api/ccmfam");
  }

  ListarTipos() {
  return this.http.get<any[]>(this.apiurl +"/api/ccmtpt");
  }

  ListarClases() {
  return this.http.get<any[]>(this.apiurl +"/api/ccmcla");
  }

  ListarAlm() {
  return this.http.get<any[]>(this.apiurl +"/api/ccmalm");
  }

  ListarTip() {
  return this.http.get<any[]>(this.apiurl +"/api/ccmtip");
  }

  ListarTrs() {
  return this.http.get<any[]>(this.apiurl +"/api/ccmtrs");
  }

  ListarVen() {
  return this.http.get<any[]>(this.apiurl +"/api/ccmven");
  }

  ListarCos() {
  return this.http.get<any[]>(this.apiurl +"/api/cpmcos");
  }

  ListarInmuni() {
  return this.http.get<any[]>(this.apiurl +"/api/inmuni");
  }


}
