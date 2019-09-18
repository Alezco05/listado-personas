//import { HttpClient } from 'selenium-webdriver/http';
import {HttpClient} from '@angular/common/http';
import { Persona } from './persona.model';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';

@Injectable()
export class DataServices{

      constructor(private httpClient: HttpClient,
        private loginService: LoginService){}
      cagarPersonas()
      {
          const token = this.loginService.getIdToken();
          return this.httpClient.get(`https://listado-personas-1c7a1.firebaseio.com//datos.json?auth=${token}`);
      }

      //Guardar Personas
      guardarPersonas(personas: Persona[]){      
        const token = this.loginService.getIdToken();
          this.httpClient.put(`https://listado-personas-1c7a1.firebaseio.com//datos.json?auth=${token}`,personas)
          .subscribe(
              response => console.log("Resultado de guardar las personas" + response),
              error =>console.log(error)
          )
      }
      modificarPersona(index:number,persona:Persona){
          let url: string;      
          const token = this.loginService.getIdToken();
          url =  `https://listado-personas-1c7a1.firebaseio.com/datos/${index}.json?auth=${token}`;
          this.httpClient.put(url,persona).subscribe(
              response => console.log(`La persona con el indice ${index} ha sido modificada`),
              error => console.log(error)
          );
      }
      eliminarPersona(index: number){
        let url: string;
        const token = this.loginService.getIdToken();
        url =  `https://listado-personas-1c7a1.firebaseio.com/datos/${index}.json?auth=${token}`;
        this.httpClient.delete(url).subscribe(
            response => console.log(`La persona con el indice ${index} ha sido eliminada`),
            error => console.log(error)
        );
      }
}