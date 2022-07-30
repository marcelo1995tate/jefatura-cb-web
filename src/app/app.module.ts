import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './general/footer/footer.component';
import { HeaderComponent } from './general/header/header.component';
import { HomeComponent } from './home/home.component';
import { PlanificacionesComponent } from './planificaciones/planificaciones.component';
import { PlanosComponent } from './planos/planos.component';
import { LogosComponent } from './logos/logos.component';
import { ModulosComponent } from './modulos/modulos.component';
import { CarrouselComponent } from './home/carrousel/carrousel.component';
import { VeinteVeintiDosComponent } from './logos/ciclo/veinte-veinti-dos/veinte-veinti-dos.component';
import { SitioConstruccionComponent } from './general/sitio-construccion/sitio-construccion.component';
import { BannerInfoGeneralComponent } from './general/banner-info-general/banner-info-general.component';
import { InfoImportanteComponent } from './general/info-importante/info-importante.component';
import { MesaExamenComponent } from './mesa-examen/mesa-examen.component';
import { AgradecimientosComponent } from './general/agradecimientos/agradecimientos.component';
import { NotFoundComponent } from './general/not-found/not-found.component';
import { LoginComponent } from './general/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MejorasCarrouselComponent } from './logos/ciclo/veinte-veinti-dos/mejoras-carrousel/mejoras-carrousel.component';

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
    MejorasCarrouselComponent
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
