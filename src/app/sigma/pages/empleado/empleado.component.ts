import { Component, OnInit } from '@angular/core';
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
  constructor(private _empleadoService: EmpleadoService) { }
  
  ngOnInit(): void {
    this.getEmpleados();
  }
  reload(){
    location.reload();
  }
  getEmpleados(){
    this.blnActualizar = false;
    this.arrEmpleados = this._empleadoService.obtenerEmpleados(); 
  }
  actualizar(id:string){
    this.idEmpleado = id;
    this.blnActualizar=true;
  }
}
