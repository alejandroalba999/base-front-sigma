import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  recordarme: boolean = false;

  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('email') && localStorage.getItem('pass')) {
      this.email = localStorage.getItem('email')!;
      this.password = localStorage.getItem('pass')!;
      this.recordarme = true;
    }
  }

  login(): void { 
    this.authService.login(this.email, this.password).then( (data: any) => {
      Toast.fire({
        icon: 'success',
        title: `Bienvenido, ${data.cont.usuario.strNombre}!`
      })
      localStorage.setItem('token', data.cont.token);
      this.router.navigate(['/sigma']);
      if (this.recordarme) {
        localStorage.setItem('email', this.email);
        localStorage.setItem('pass', this.password);
        localStorage.setItem('userName', data.cont.usuario.strNombre);
      } else {
        localStorage.removeItem('email');
        localStorage.removeItem('pass');
      }

    }).catch((error)=>{
      Toast.fire({
        icon: 'error',
        title: `${error.error.msg}`
      })
    })
  }
}

