import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-continuidad-pedagogica-electro',
  templateUrl: './continuidad-pedagogica-electro.component.html',
  styleUrls: ['./continuidad-pedagogica-electro.component.css']
})
export class ContinuidadPedagogicaElectroComponent implements OnInit {

  constructor(private title:Title) {
    this.title.setTitle(environment.TITLE + "Electro | Continuidad Pedagógica")
  }

  ngOnInit(): void {
  }

}
