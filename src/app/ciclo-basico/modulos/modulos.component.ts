import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {environment} from "../../../environments/environment.prod";

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit {

  constructor(private title:Title) {
    this.title.setTitle(environment.TITLE + "TCB | Módulos")
  }

  ngOnInit(): void {
  }

}
