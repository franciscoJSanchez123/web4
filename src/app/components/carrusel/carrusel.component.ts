import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: [
   

 
  '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
  './carrusel.component.css'
  ],
  encapsulation: ViewEncapsulation.ShadowDom
   
})
export class CarruselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
