import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PermisoService {
  urlImg = `${environment.urlLocal}/imagen`;
  url = `${environment.urlLocal}/permisos`;

  constructor( private http: HttpClient, private router: Router) { }

  obtenerModulosPorUsuario(idUsuario: string) {
    return this.http.get( `${this.url}/modulo`,{params:{_idUsuario: idUsuario}}).toPromise();
  }
}