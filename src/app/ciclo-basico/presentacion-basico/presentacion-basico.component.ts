import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-presentacion-basico',
  templateUrl: './presentacion-basico.component.html',
  styleUrls: ['./presentacion-basico.component.css']
})
export class PresentacionBasicoComponent implements OnInit {

  constructor(private title:Title) {
    this.title.setTitle(environment.TITLE + "TCB | Presentación")
  }

  ngOnInit(): void {
  }

}
