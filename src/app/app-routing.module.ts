import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PlanificacionesComponent} from "./planificaciones/planificaciones.component";
import {PlanosComponent} from "./planos/planos.component";
import {LogosComponent} from "./logos/logos.component";
import {ModulosComponent} from "./modulos/modulos.component";
import {VeinteVeintiDosComponent} from "./logos/ciclo/veinte-veinti-dos/veinte-veinti-dos.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'planificaciones', component: PlanificacionesComponent},
  {path: 'planos', component: PlanosComponent},
  {path: 'modulos', component: ModulosComponent},
  {
    path: 'logros', component: LogosComponent,
    children: [
      {path: '2022', component: VeinteVeintiDosComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
