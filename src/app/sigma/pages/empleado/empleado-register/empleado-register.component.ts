import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmpleadoModel } from 'src/app/auth/model/empleado.model';
import { EmpleadoService } from 'src/app/auth/services/empleado.service';

@Component({
  selector: 'app-empleado-register',
  templateUrl: './empleado-register.component.html',
  styleUrls: ['./empleado-register.component.css']
})
export class EmpleadoRegisterComponent implements OnInit {
  empleadoModel = new EmpleadoModel();
  @Output() salida = new EventEmitter();
  constructor(private _empleadoService: EmpleadoService) { }

  ngOnInit(): void {
  }
  registrarEmpleado(){
    this._empleadoService.registrarEmpleado(this.empleadoModel);
    this.salida.emit();
    this.limpiarForm();
  }
  limpiarForm(){
    this.empleadoModel.nmbNumeroEmpleado = 0;
    this.empleadoModel.strNombre = "";
    this.empleadoModel.strPuesto = "";
  }
}
