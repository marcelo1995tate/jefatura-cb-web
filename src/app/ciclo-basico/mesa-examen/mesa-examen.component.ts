import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {environment} from "../../../environments/environment.prod";

@Component({
  selector: 'app-mesa-examen',
  templateUrl: './mesa-examen.component.html',
  styleUrls: ['./mesa-examen.component.css']
})
export class MesaExamenComponent implements OnInit {

  constructor(private title:Title) {
    this.title.setTitle(environment.TITLE + "Mesa de examen")
  }

  ngOnInit(): void {
  }

}
