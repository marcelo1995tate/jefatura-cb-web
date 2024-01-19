import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {environment} from "../../../environments/environment.prod";

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.css']
})
export class PlanosComponent implements OnInit {

  constructor(private title:Title) {
    this.title.setTitle(environment.TITLE + "TCB | Planos")
  }

  ngOnInit(): void {
  }

}
