import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './general/footer/footer.component';
import { HeaderComponent } from './general/header/header.component';
import { HomeComponent } from './home/home.component';
import { PlanificacionesComponent } from './ciclo-basico/planificaciones/planificaciones.component';
import { PlanosComponent } from './ciclo-basico/planos/planos.component';
import { LogosComponent } from './logos/logos.component';
import { ModulosComponent } from './ciclo-basico/modulos/modulos.component';
import { CarrouselComponent } from './home/carrousel/carrousel.component';
import { VeinteVeintiDosComponent } from './logos/ciclo/veinte-veinti-dos/veinte-veinti-dos.component';
import { SitioConstruccionComponent } from './general/sitio-construccion/sitio-construccion.component';
import { BannerInfoGeneralComponent } from './general/banner-info-general/banner-info-general.component';
import { InfoImportanteComponent } from './general/info-importante/info-importante.component';
import { MesaExamenComponent } from './ciclo-basico/mesa-examen/mesa-examen.component';
import { AgradecimientosComponent } from './general/agradecimientos/agradecimientos.component';
import { NotFoundComponent } from './general/not-found/not-found.component';
import { LoginComponent } from './general/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MejorasCarrouselComponent } from './logos/ciclo/veinte-veinti-dos/mejoras-carrousel/mejoras-carrousel.component';
import { ContinuidadPedagogicaComponent } from './ciclo-basico/continuidad-pedagogica/continuidad-pedagogica.component';
import { MaterialDeApoyoComponent } from './material-de-apoyo/material-de-apoyo.component';
import { HomeBasicoComponent } from './ciclo-basico/home-basico/home-basico.component';
import { PresentacionBasicoComponent } from './ciclo-basico/presentacion-basico/presentacion-basico.component';
import { HomeElectroComponent } from './electromecanica/home-electro/home-electro.component';
import { PresentacionElectroComponent } from './electromecanica/presentacion-electro/presentacion-electro.component';
import { ContinuidadPedagogicaElectroComponent } from './electromecanica/continuidad-pedagogica-electro/continuidad-pedagogica-electro.component';
import { PlanosElectroComponent } from './electromecanica/planos-electro/planos-electro.component';
import { ModulosElectroComponent } from './electromecanica/modulos-electro/modulos-electro.component';
import { ExamenElectroComponent } from './electromecanica/examen-electro/examen-electro.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PlanificacionesComponent,
    PlanosComponent,
    LogosComponent,
    AgradecimientosComponent,
    ModulosComponent,
    CarrouselComponent,
    VeinteVeintiDosComponent,
    SitioConstruccionComponent,
    BannerInfoGeneralComponent,
    InfoImportanteComponent,
    MesaExamenComponent,
    AgradecimientosComponent,
    NotFoundComponent,
    LoginComponent,
    MejorasCarrouselComponent,
    ContinuidadPedagogicaComponent,
    MaterialDeApoyoComponent,
    HomeBasicoComponent,
    PresentacionBasicoComponent,
    HomeElectroComponent,
    PresentacionElectroComponent,
    ContinuidadPedagogicaElectroComponent,
    PlanosElectroComponent,
    ModulosElectroComponent,
    ExamenElectroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
