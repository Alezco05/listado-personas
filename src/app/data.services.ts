//import { HttpClient } from 'selenium-webdriver/http';
import {HttpClient} from '@angular/common/http';
import { Persona } from './persona.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DataServices{

      constructor(private httpClient: HttpClient){}
      cagarPersonas()
      {
          return this.httpClient.get('https://listado-personas-1c7a1.firebaseio.com//datos.json');
      }

      //Guardar Personas
      guardarPersonas(personas: Persona[]){
          this.httpClient.put('https://listado-personas-1c7a1.firebaseio.com//datos.json',personas)
          .subscribe(
              response => console.log("Resultado de guardar las personas" + response),
              error =>console.log(error)
          )
      }
      modificarPersona(index:number,persona:Persona){
          let url: string;
          url =  `https://listado-personas-1c7a1.firebaseio.com/datos/${index}.json`;
          this.httpClient.put(url,persona).subscribe(
              response => console.log(`La persona con el indice ${index} ha sido modificada`),
              error => console.log(error)
          );
      }
      eliminarPersona(index: number){
        let url: string;
        url =  `https://listado-personas-1c7a1.firebaseio.com/datos/${index}.json`;
        this.httpClient.delete(url).subscribe(
            response => console.log(`La persona con el indice ${index} ha sido eliminada`),
            error => console.log(error)
        );
      }
}