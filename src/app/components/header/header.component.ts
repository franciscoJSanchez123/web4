import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private interactionService:InteractionService){

  }

  ngOnInit(): void {
  }

  changeMenu(){
    this.interactionService.changeMenu()
  }

}
