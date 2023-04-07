import { Component, OnInit } from '@angular/core';
import { ProjectService} from '../../services/project.service'
import { project } from '../../models/project'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  hideCarousel:boolean=false;
hideGrid:boolean=true;
project!:project;
projects:project[]=[];

constructor(
  private projectService:ProjectService,
  ) { }

ngOnInit(): void {

  /*
  this.projectService.getProjects().subscribe(res=>{
   this.projects=res;
   console.log(this.projects)
   
  })*/

  
   
 }
changeHide(param:string){
  if(param==='carousel'){
    this.hideCarousel=true;
    this.hideGrid=false
  }else{
    this.hideCarousel=false;
    this.hideGrid=true
  }
 
  }

}
