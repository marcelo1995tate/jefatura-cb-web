import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PlanificacionesComponent } from "./ciclo-basico/planificaciones/planificaciones.component";
import { PlanosComponent } from "./ciclo-basico/planos/planos.component";
import { LogosComponent } from "./logos/logos.component";
import { ModulosComponent } from "./ciclo-basico/modulos/modulos.component";
import { VeinteVeintiDosComponent } from "./logos/ciclo/veinte-veinti-dos/veinte-veinti-dos.component";
import { MesaExamenComponent } from "./ciclo-basico/mesa-examen/mesa-examen.component";
import { NotFoundComponent } from "./general/not-found/not-found.component";
import { LoginComponent } from "./general/login/login.component";
import { LogueadoGuard } from "./service/guard/logueado.guard";
import { NoLogueadoGuard } from "./service/guard/no-logueado.guard";
import { ContinuidadPedagogicaComponent } from "./ciclo-basico/continuidad-pedagogica/continuidad-pedagogica.component";
import { MaterialDeApoyoComponent } from "./material-de-apoyo/material-de-apoyo.component";
import { HomeBasicoComponent } from './ciclo-basico/home-basico/home-basico.component';
import { PresentacionBasicoComponent } from './ciclo-basico/presentacion-basico/presentacion-basico.component';
import { HomeElectroComponent } from './electromecanica/home-electro/home-electro.component';
import { PresentacionElectroComponent } from './electromecanica/presentacion-electro/presentacion-electro.component';
import { ContinuidadPedagogicaElectroComponent } from './electromecanica/continuidad-pedagogica-electro/continuidad-pedagogica-electro.component';
import { PlanosElectroComponent } from './electromecanica/planos-electro/planos-electro.component';
import { ModulosElectroComponent } from './electromecanica/modulos-electro/modulos-electro.component';
import { ExamenElectroComponent } from './electromecanica/examen-electro/examen-electro.component';

const routes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'home', component: HomeComponent },


  {
    path: 'basico', component: HomeBasicoComponent,
    children: [
      { path: 'presentacion', component: PresentacionBasicoComponent },

      { path: 'planificaciones', component: PlanificacionesComponent, canActivate: [LogueadoGuard] },

      { path: 'login', component: LoginComponent, canActivate: [NoLogueadoGuard] },

      { path: 'planos', component: PlanosComponent },

      { path: 'modulos', component: ModulosComponent },

      { path: 'examen', component: MesaExamenComponent },

      { path: 'continuidad-pedagogica', component: ContinuidadPedagogicaComponent },
    ]
  },

  {
    path: 'electro', component: HomeElectroComponent,
    children: [
      { path: 'presentacion', component: PresentacionElectroComponent },

      { path: 'planos', component: PlanosElectroComponent },

      { path: 'modulos', component: ModulosElectroComponent },

      { path: 'examen', component: ExamenElectroComponent },

      { path: 'continuidad-pedagogica', component: ContinuidadPedagogicaElectroComponent },
    ]
  },

  { path: 'material-apoyo', component: MaterialDeApoyoComponent },

  {
    path: 'logros', component: LogosComponent,
    children: [
      { path: '2022', component: VeinteVeintiDosComponent }
    ]
  },

  { path: 'pagina404', component: NotFoundComponent },

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
