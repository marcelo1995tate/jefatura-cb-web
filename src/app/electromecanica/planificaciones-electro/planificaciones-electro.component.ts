import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-planificaciones-electro',
  templateUrl: './planificaciones-electro.component.html',
  styleUrls: ['./planificaciones-electro.component.css']
})
export class PlanificacionesElectroComponent implements OnInit {


  constructor(private title:Title) {
    this.title.setTitle(environment.TITLE + "Electro | Planificaciones")
  }
  ngOnInit(): void {
  }

}
