import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {environment} from "../../environments/environment.prod";

@Component({
  selector: 'app-continuidad-pedagogica',
  templateUrl: './continuidad-pedagogica.component.html',
  styleUrls: ['./continuidad-pedagogica.component.css']
})
export class ContinuidadPedagogicaComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle(environment.TITLE + "Continuidad Pedagógica")
  }

  ngOnInit(): void {
  }

}
