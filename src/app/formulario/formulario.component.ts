import { Component, OnInit} from '@angular/core';
import { Persona } from '../persona.model';
import { LogginService } from '../LogginService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  nombreInput: string = "";
  apellidoInput: string = ""; 

  constructor(private personaService: PersonasService) {
    this.personaService.saludar.subscribe(
      (indice:number) => alert(`El indice es ${indice}`)
    );
  }

  ngOnInit() {
  }

  onAgregarPersona() {
    if (this.nombreInput.length === 0) {
      alert("Nombre vacio");
      return;
    }
    if (this.apellidoInput.length === 0) {
      alert("Apellido vacio");
      return;
    }
    const persona = new Persona(this.nombreInput, this.apellidoInput);
    this.personaService.agregarPersona(persona);
  }
}