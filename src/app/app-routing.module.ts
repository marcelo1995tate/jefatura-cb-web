import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PlanificacionesComponent} from "./planificaciones/planificaciones.component";
import {PlanosComponent} from "./planos/planos.component";
import {LogosComponent} from "./logos/logos.component";

const routes: Routes = [
  {path: '', component: HomeComponent},

  {path: 'planificaciones', component: PlanificacionesComponent},
  {path: 'planos', component: PlanosComponent},
  {path: 'logos', component: LogosComponent},
  {path: 'modulos', component: LogosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
