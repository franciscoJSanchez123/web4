import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(private interactionService:InteractionService){

  }

  ngOnInit(): void {
  }

  changeMenu(){
    this.interactionService.changeMenu()
  }


}
