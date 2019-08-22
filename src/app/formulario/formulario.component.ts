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
  //Para informar que se envia un campo
  //@Output() personaCreada = new EventEmitter<Persona>();
  nombreInput: string = "";
  apellidoInput: string = ""; 

  constructor(private logginService:LogginService,
    private personaService: PersonasService) {
  }

  ngOnInit() {
  }

  onAgregarPersona() {
    if (this.nombreInput.length === 0) {
      console.log("nombre vacio");
      return;
    }
    if (this.apellidoInput.length === 0) {
      console.log("apellido vacio");
      return;
    }
    const persona = new Persona(this.nombreInput, this.apellidoInput);
    // Se le envia por el metodo emit un objeto de tipo persona
    //this.logginService.enviarMensajeAConsola(`Enviamos el mensaje ${persona.nombre} ${persona.apellido}`);
    //this.personaCreada.emit(persona);
    this.personaService.agregarPersona(persona);
  }
}