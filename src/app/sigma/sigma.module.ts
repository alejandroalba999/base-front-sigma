import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './pages/user/user.component';
import { SigmaRoutingModule } from './sigma-routing.module';
import { SigmaComponent } from './sigma.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { EmpleadoComponent } from './pages/empleado/empleado.component';
import { RegionComponent } from './pages/region/region.component';
import { EmpleadoEditComponent } from './pages/empleado/empleado-edit/empleado-edit.component';
import { EmpleadoRegisterComponent } from './pages/empleado/empleado-register/empleado-register.component';
import { HabilidadComponent } from './pages/empleado/habilidad/habilidad.component';



@NgModule({
  declarations: [
    UserComponent,
    SigmaComponent,
    HomeComponent,
    EmpleadoComponent,
    RegionComponent,
    EmpleadoEditComponent,
    EmpleadoRegisterComponent,
    HabilidadComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SigmaRoutingModule,
    FormsModule
  ]
})
export class SigmaModule { }
