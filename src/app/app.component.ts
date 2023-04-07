import { Component } from '@angular/core';
import { InteractionService } from './services/interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web2';
  isMenuMobile:boolean=false

  constructor(private interactionService:InteractionService){

  }
  ngOnInit(): void {
    this.interactionService.isMenuHidden.subscribe((data)=>{

        this.isMenuMobile=data
    })
     
    }

}
