import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  urlImg = `${environment.urlLocal}/imagen`;
  url = `${environment.urlLocal}/usuario`;
  arrEmpleado = [{_id:"180369",nmbNumeroEmpleado:1, strNombre:"Juan", strPuesto:"Desarrollador Pro"},
  {_id:"180370",nmbNumeroEmpleado:2, strNombre:"Mario", strPuesto:"Desarrollador Jr"},
  {_id:"180371",nmbNumeroEmpleado:3, strNombre:"Pedro", strPuesto:"Desarrollador Senior"}]
  arrEmpleadoEdit = [{_id:"180369",nmbNumeroEmpleado:1, strNombre:"Juan", strPuesto:"Desarrollador Pro"},
  {_id:"180370",nmbNumeroEmpleado:2, strNombre:"Mario", strPuesto:"Desarrollador Jr"},
  {_id:"180371",nmbNumeroEmpleado:3, strNombre:"Pedro", strPuesto:"Desarrollador Senior"}]
  constructor( private http: HttpClient, private router: Router) { }

  obtenerEmpleados() {
    return this.http.get(`${this.url}`).toPromise();
  }
  obtenerEmpleadoById(id:string){
    return this.arrEmpleadoEdit.find(res =>res._id == id);
  }
  registrarEmpleado(body:any){
    this.arrEmpleadoEdit.push(body);
    this.arrEmpleado = this.arrEmpleadoEdit;
    return this.arrEmpleado;
  }
  actualizarEmpleado(id: string,body:any){
   const filterId = this.arrEmpleado.filter(res => res._id != id);
   this.arrEmpleado = filterId;
   return this.arrEmpleado.unshift({...body,_id:id})
  }
  eliminarEmpleado(id:string){
  const data = this.arrEmpleado.filter(res => res._id != id);
  this.arrEmpleadoEdit = data;
  this.arrEmpleado = data;
  }
}