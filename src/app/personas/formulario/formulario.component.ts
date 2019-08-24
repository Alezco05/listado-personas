import { Component, OnInit} from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  nombreInput: string = "";
  apellidoInput: string = ""; 
  index:number;
  modoEdicion:number;
  constructor(private personaService: PersonasService,
    private router:Router,
    private route:ActivatedRoute
    ) {
    this.personaService.saludar.subscribe(
      (indice:number) => alert(`El indice es ${indice}`)
    );
  }

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    //EL + es para convertirlo a numero
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
    if(this.modoEdicion != null && this.modoEdicion === 1){
      const persona = this.personaService.getPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersona() {
    if (this.nombreInput.length === 0) {
      alert("Nombre vacio");
      return;
    }
    if (this.apellidoInput.length === 0) {
      alert("Apellido vacio");
      return;
    }
    const persona = new Persona(this.nombreInput, this.apellidoInput);
    if(this.index){
      this.personaService.editPersona(this.index,persona);
    }else{
      this.personaService.agregarPersona(persona);
    }
    this.router.navigate(["personas"]);
  }
  eliminarPersona(){
    if(this.index){
      this.personaService.removePersona(this.index);
    }
    this.router.navigate(["personas"]);
  }
}