import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { PermisoService } from 'src/app/auth/services/permisos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cargando: boolean = true;
  userName: string = '';
  decode : any;
  strRutaImg: string = '';
  arrModulos: any = [];
  routeName: string = 'Menu';
  pathName: string = location.href.split('#')[1];
  constructor( private router: Router, private _permisosService: PermisoService) { }
  ngOnInit(): void {     
    if (localStorage.getItem('userName')) {
      this.userName = localStorage.getItem('userName')!;
    }
    this.obtenerModulos();
  }
  navigate(ruta: string, nombreRuta: string){
    console.log('navegar a :', ruta);
    this.routeName = nombreRuta;
    this.pathName = ruta;
    this.router.navigate([ruta]);
  }
  obtenerModulos(){
    const token = `${localStorage.getItem('token')}`;
    this.decode = jwtDecode(token);
    this.strRutaImg = `${this._permisosService.urlImg}/usuario/${this.decode.usuario.strImagen}`
    this._permisosService.obtenerModulosPorUsuario(this.decode.usuario._id).then((data: any) =>{ 
      this.arrModulos = data.cont.obtenerUsuarios.rol.apis;
    this.cargando = false;
    }).catch(error=>{
      this.arrModulos = [];
      console.log(error);
    this.cargando = false;
    });
  }

  logout(): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "Your session will be closed!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.value) {
        localStorage.removeItem('token');
        this.router.navigate(['auth/login']);
      }
    });
  }
}
