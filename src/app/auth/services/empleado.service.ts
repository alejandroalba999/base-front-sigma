import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  urlImg = `${environment.urlLocal}/imagen`;
  url = `${environment.urlLocal}/permisos`;
  arrEmpleado = [{_id:"180369",nmbNumeroEmpleado:1, strNombre:"Juan", strPuesto:"Desarrollador Pro"},
  {_id:"180370",nmbNumeroEmpleado:2, strNombre:"Mario", strPuesto:"Desarrollador Jr"},
  {_id:"180371",nmbNumeroEmpleado:3, strNombre:"Pedro", strPuesto:"Desarrollador Senior"}]
  constructor( private http: HttpClient, private router: Router) { }

  obtenerEmpleados() {
    return this.arrEmpleado;
  }
  obtenerEmpleadoById(id:string){
    return this.arrEmpleado.find(res =>res._id == id);
  }
}