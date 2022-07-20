import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public dia: boolean = true;

  constructor(private serviceAppComponent: AppComponent) {
    if (!localStorage.getItem('modoVision') || localStorage.getItem('modoVision') == "/assets/css/dia.css")
      this.dia = true
    else
      this.dia = false
  }

  ngOnInit(): void {
  }

  public cargarTemaDia() {
    this.dia = true;
    this.serviceAppComponent.cambiarEstilos('dia');
  }

  public cargarTemaOscuro() {
    this.dia = false;
    this.serviceAppComponent.cambiarEstilos('oscuro');
  }
}
