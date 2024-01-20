import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-examen-electro',
  templateUrl: './examen-electro.component.html',
  styleUrls: ['./examen-electro.component.css']
})
export class ExamenElectroComponent implements OnInit {

  constructor(private title:Title) {
    this.title.setTitle(environment.TITLE + "Electro | Mesa de examen")
  }

  ngOnInit(): void {
  }

}
