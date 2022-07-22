import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router} from '@angular/router';
import jwtDecode from 'jwt-decode';
import Swal from 'sweetalert2';
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = `${environment.urlLocal}/auth`;
  validarAcceso: boolean = false;
  token: any;
  constructor( private http: HttpClient, private router: Router) { }

  login( correo: string, contrasena: string ){
    return this.http.post( `${this.url}/login`, {strCorreo: correo, strContrasena: contrasena}).toPromise();
  }  
  validarAccesoModulo(idUsuario: string, strUrl: string){
    return this.http.post( `${this.url}/permisos`, {idUsuario, strUrl}).toPromise();
  }
  
 async checkAuth(url: string): Promise<boolean> {
      if (!localStorage.getItem('token')) {
        this.router.navigateByUrl('/auth/login');
        return Promise.reject(false);
    }
     this.token = localStorage.getItem('token');
     const decodeToken: any = jwtDecode(this.token);
     return this.validarAccesoModulo(decodeToken.usuario._id,url).then((data: any) =>{
      console.log('tiene acceso');
      return Promise.resolve(true);
    }).catch((err) =>{
      Toast.fire({
        icon: 'error',
        title: `${err.error.msg}`
      })
      return Promise.resolve(false); 
    })
  }
}
