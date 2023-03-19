import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public error: string="";
  public forms;
  constructor(private router: Router,private formBuilder: FormBuilder) {
    this.forms = this.formBuilder.group({pass: ''});
  }

  ngOnInit(): void {
  }
public loguear(){
    if ( this.forms.value.pass.toUpperCase()==environment.PASSWORD_PLANIFICAIONES.toUpperCase()){
      localStorage.setItem('planificacion', 'ok');
      this.router.navigate(['/planificaciones']);
    }
    else{
      this.error='PASSWORD INCORRECTO'
    }
}
}
