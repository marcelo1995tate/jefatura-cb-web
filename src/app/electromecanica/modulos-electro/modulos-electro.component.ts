import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-modulos-electro',
  templateUrl: './modulos-electro.component.html',
  styleUrls: ['./modulos-electro.component.css']
})
export class ModulosElectroComponent implements OnInit {

  constructor(private title:Title) {
    this.title.setTitle(environment.TITLE + "Electro | Módulos")
  }

  ngOnInit(): void {
  }

}
