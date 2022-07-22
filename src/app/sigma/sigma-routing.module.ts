import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessGuard } from '../auth/guards/access.guard';
import { EmpleadoComponent } from './pages/empleado/empleado.component';
import { HabilidadComponent } from './pages/empleado/habilidad/habilidad.component';
import { HomeComponent } from './pages/home/home.component';
import { RegionComponent } from './pages/region/region.component';
import { UserComponent } from './pages/user/user.component';
import { SigmaComponent } from './sigma.component';

const routes: Routes = [
  {
    path: '', component: SigmaComponent,children: [
      { path: 'user', data:{nombre: "user"}, component: UserComponent, canActivate:[AccessGuard]},
      { path: 'home',data:{nombre: "home"}, component: HomeComponent, canActivate:[AccessGuard] },
      { path:'empleado', data:{nombre: "empleado"}, children:[
        {path:'', component: EmpleadoComponent},
        {path:'habilidad/:idEmpleado', component: HabilidadComponent}
      ] },
      { path: 'region', data:{nombre: "region"}, component: RegionComponent, canActivate:[AccessGuard] },
      { path: '**', redirectTo: 'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class SigmaRoutingModule { }