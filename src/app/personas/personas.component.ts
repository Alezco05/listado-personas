import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LogginService } from '../LogginService.service';
import { PersonasService } from '../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];
  constructor(
    private personaService: PersonasService,
    private router:Router
    ){}

    ngOnInit(): void {
      //this.personas = this.personaService.personas;
      this.personaService.obtenerPersonas().subscribe(
        (personas: Persona[])=> {
          this.personas = personas;
          this.personaService.setPersonas(personas);
        }
      )
    }
    agregar(){
      this.router.navigate(["personas/agregar"]);
    }

}
