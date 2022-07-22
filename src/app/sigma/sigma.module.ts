import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './pages/user/user.component';
import { SigmaRoutingModule } from './sigma-routing.module';
import { SigmaComponent } from './sigma.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { RegionComponent } from './pages/region/region.component';
import { EmpleadoComponent } from './pages/empleado/empleado.component';
import { EmpleadoEditComponent } from './pages/empleado/empleado-edit/empleado-edit.component';
import { EmpleadoRegisterComponent } from './pages/empleado/empleado-register/empleado-register.component';
import { HabilidadComponent } from './pages/empleado/habilidad/habilidad.component';
import { PaisComponent } from './pages/region/pais/pais.component';
import { RegionEditComponent } from './pages/region/region-edit/region-edit.component';
import { RegionRegisterComponent } from './pages/region/region-register/region-register.component';
import { LocalidadComponent } from './pages/region/pais/localidad/localidad.component';


@NgModule({
  declarations: [
    EmpleadoEditComponent,
    EmpleadoRegisterComponent,
    EmpleadoComponent,
    HabilidadComponent,
    UserComponent,
    SigmaComponent,
    HomeComponent,
    RegionComponent,
    PaisComponent,
    RegionEditComponent,
    RegionRegisterComponent,
    LocalidadComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SigmaRoutingModule,
    FormsModule
  ]
})
export class SigmaModule { }
