import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {environment} from "../../../environments/environment.prod";

@Component({
  selector: 'app-planificaciones',
  templateUrl: './planificaciones.component.html',
  styleUrls: ['./planificaciones.component.css']
})
export class PlanificacionesComponent implements OnInit {

  constructor(private title:Title) {
    this.title.setTitle(environment.TITLE + "Planificaciones")
  }

  ngOnInit(): void {
  }

}
