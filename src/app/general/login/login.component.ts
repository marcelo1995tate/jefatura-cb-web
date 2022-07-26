import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public password: string="vacio";
  public error: string="";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
public loguear(){
    console.log(this.password)
    if (this.password==environment.PASSWORD_PLANIFICAIONES){
      localStorage.setItem('planificacion', 'ok');
      this.router.navigate(['/planificaciones']);
    }
    else{
      this.error='PASSWORD INCORRECTO'
    }
}
}
