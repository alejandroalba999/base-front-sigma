import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/auth/services/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  blnActualizar: boolean = false;
  arrEmpleados: any = [];
  idEmpleado: string = "";
  constructor(private _empleadoService: EmpleadoService, private route: Router) { }
  
  ngOnInit(): void {
    this.getEmpleados();
  }
  getEmpleados(){
    this.blnActualizar = false;
    this._empleadoService.obtenerEmpleados().then((res:any)=>{
      this.arrEmpleados =res.cont.obtenerUsuarios;
    }).catch(err =>{
      this.arrEmpleados = [];
      console.log(err);  
    })
  }
  actualizar(id:string){
    this.idEmpleado = id;
    this.blnActualizar=true;
  }
  eliminarEmpleado(id:string){
    this._empleadoService.eliminarEmpleado(id);
    this.getEmpleados();
  }
  asignarHabilidad(id:string){
    this.route.navigate([`${this.route.url}/habilidad`,id]);
  }
}
