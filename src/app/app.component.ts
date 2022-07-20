import {Component} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jefatura-cb-web';
  public cssUrl: string;
  private dato;
  private modoOscuro: string = '/assets/css/oscuro.css';
  private modoDia: string = '/assets/css/dia.css';

  constructor(public sanitizer: DomSanitizer) {
    this.dato = localStorage.getItem('modoVision');

    if (!this.dato){
      this.cssUrl = this.modoDia;
    }
    else {
      this.cssUrl =this.dato;
    }
  }

  cambiarEstilos(temaSeleccionado: string) {
    localStorage.removeItem('modoVision');
    switch (temaSeleccionado) {
      case 'dia':
        this.cssUrl = this.modoDia;
        break;
      case 'oscuro':
        this.cssUrl = this.modoOscuro;
        break;
      default:
        this.cssUrl = this.modoDia;
        break;
    }
    localStorage.setItem('modoVision', this.cssUrl);

  }
}
