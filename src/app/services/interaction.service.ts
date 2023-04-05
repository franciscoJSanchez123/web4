import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  @Output() isMenuHidden:EventEmitter<any>=new EventEmitter<any>()
  menuHidden:boolean=false
  constructor() { }

  changeMenu(){
    this.menuHidden=!this.menuHidden;
    console.log('funciona')
    this.isMenuHidden.emit(this.menuHidden)
  }
}
