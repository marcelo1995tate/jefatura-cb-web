import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {environment} from "../../environments/environment.prod";

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.css']
})
export class LogosComponent implements OnInit {

  constructor(private title:Title) {
    this.title.setTitle(environment.TITLE + "Logros")
  }
  ngOnInit(): void {
  }

}
