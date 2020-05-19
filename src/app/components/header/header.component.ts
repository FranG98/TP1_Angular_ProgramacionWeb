import { Component, OnInit } from '@angular/core';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cambiar: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  public cambio(){
    this.cambiar = false;
  }
}
