import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LogginService } from './LogginService.service';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  titulo = 'Listado de Personas';
  personas: Persona[] = [];
  constructor(private logginService:LogginService,
    private personaService: PersonasService){}

    ngOnInit(): void {
      this.personas = this.personaService.personas;
    }

  //Recibimos el evento emitido ($event es igual a el parámetro agregado en el evento emitido)
  /* onPersonaAgregada(persona:Persona){
    this.personaService.agregarPersona(persona);
  } */
}
