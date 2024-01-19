import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-presentacion-electro',
  templateUrl: './presentacion-electro.component.html',
  styleUrls: ['./presentacion-electro.component.css']
})
export class PresentacionElectroComponent implements OnInit {

  constructor(private title:Title) {
    this.title.setTitle(environment.TITLE + "Electro | Presentación")
  }

  ngOnInit(): void {
  }

}
