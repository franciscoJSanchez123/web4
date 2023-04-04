import { Component } from '@angular/core';
import { project} from '../app/models/project'
import { ProjectService } from '../app/services/project.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web2';

  project!:project;
projects:project[]=[];

constructor(
  private projectService:ProjectService,
  ) { }

ngOnInit(): void {
  this.projectService.getProjects().subscribe(res=>{
   this.projects=res;
   console.log(this.projects)
   
  })

  }
}
