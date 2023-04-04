import { Injectable } from '@angular/core';

import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import { project} from '../models/project'


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private db:AngularFirestore) { 
    
  }


//-----------------------------------------------------------------------------------------------------------------------------------



  getProjects(): Observable<project[]> {
    const projectsCollection: AngularFirestoreCollection<project> = this.db.collection<project>('projects');
    return projectsCollection.valueChanges();
  }



  
//-----------------------------------------------------------------------------------------------------------------------------------
  addProject() {
    const project = {
      name: 'My Project',
      imgMain: 'A new project',
      projectsImg:[]
    };


    const projectsCollection: AngularFirestoreCollection<project> = this.db.collection<project>('projects');
    

    projectsCollection.add(project)
      .then((docRef) => {
        console.log('Documento guardado con ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error al guardar el documento: ', error);
      });
  }
}
