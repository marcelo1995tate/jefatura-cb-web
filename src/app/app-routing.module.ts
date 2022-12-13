import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PlanificacionesComponent} from "./planificaciones/planificaciones.component";
import {PlanosComponent} from "./planos/planos.component";
import {LogosComponent} from "./logos/logos.component";
import {ModulosComponent} from "./modulos/modulos.component";
import {VeinteVeintiDosComponent} from "./logos/ciclo/veinte-veinti-dos/veinte-veinti-dos.component";
import {MesaExamenComponent} from "./mesa-examen/mesa-examen.component";
import {NotFoundComponent} from "./general/not-found/not-found.component";
import {LoginComponent} from "./general/login/login.component";
import {LogueadoGuard} from "./service/guard/logueado.guard";
import {NoLogueadoGuard} from "./service/guard/no-logueado.guard";
import {ContinuidadPedagogicaComponent} from "./continuidad-pedagogica/continuidad-pedagogica.component";
import {MaterialDeApoyoComponent} from "./material-de-apoyo/material-de-apoyo.component";

const routes: Routes = [

  {path: '', component: HomeComponent},

  {path: 'home', component: HomeComponent},

  {path: 'planificaciones', component: PlanificacionesComponent,canActivate:[LogueadoGuard]},

  {path: 'planos', component: PlanosComponent},

  {path: 'modulos', component: ModulosComponent},

  {path: 'examen', component: MesaExamenComponent},

  {path: 'continuidad-pedagogica', component: ContinuidadPedagogicaComponent},

  {path: 'material-apoyo', component: MaterialDeApoyoComponent},

  {
    path: 'logros', component: LogosComponent,
    children: [
      {path: '2022', component: VeinteVeintiDosComponent}
    ]
  },
  {path: 'login', component: LoginComponent  ,canActivate:[NoLogueadoGuard]},

  {path: 'pagina404', component: NotFoundComponent  },

  {
    path: '**',
    redirectTo: 'pagina404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
