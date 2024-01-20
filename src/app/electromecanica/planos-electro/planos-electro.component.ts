import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-planos-electro',
  templateUrl: './planos-electro.component.html',
  styleUrls: ['./planos-electro.component.css']
})
export class PlanosElectroComponent implements OnInit {

  constructor(private title:Title) {
    this.title.setTitle(environment.TITLE + "Electro | Planos")
  }

  ngOnInit(): void {
  }

}
