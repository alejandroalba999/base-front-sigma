import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmpleadoModel } from 'src/app/auth/model/empleado.model';
import { EmpleadoService } from 'src/app/auth/services/empleado.service';

@Component({
  selector: 'app-empleado-edit',
  templateUrl: './empleado-edit.component.html',
  styleUrls: ['./empleado-edit.component.css']
})
export class EmpleadoEditComponent implements OnInit {
  idEmpleado: string = "";
  empleadoModel: any = new EmpleadoModel();
  @Input() set idEmpleadoInput(value: string) {
    this.idEmpleado = value;
    this.ngOnInit();
  }
  @Output() salida = new EventEmitter();
  constructor(private _empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.encontrarEmpleado();
  }
  encontrarEmpleado(){
   this.empleadoModel= this._empleadoService.obtenerEmpleadoById(this.idEmpleado); 
  }
  actualizarEmpleado(){
    this.salida.emit();
    this.empleadoModel.strPuesto = "";
    this.empleadoModel.strNombre = "";
    this.empleadoModel.nmbNumeroEmpleado = null;
  }

}
