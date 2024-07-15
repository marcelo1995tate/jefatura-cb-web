import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-login-electro',
  templateUrl: './login-electro.component.html',
  styleUrls: ['./login-electro.component.css']
})
export class LoginElectroComponent implements OnInit {
  public error: string="";
  public forms;
  constructor(private router: Router,private formBuilder: FormBuilder) {
    this.forms = this.formBuilder.group({pass: ''});
  }

  ngOnInit(): void {
  }
public loguear(){
    if ( this.forms.value.pass.toUpperCase()==environment.PASSWORD_PLANIFICAIONES.toUpperCase()){
      localStorage.setItem('planificacion-electro', 'ok');
      this.router.navigate(['/electro/planificaciones']);
    }
    else{
      this.error='PASSWORD INCORRECTO'
    }
}
}
