import { Persona } from './persona.model';
import { LogginService } from './LogginService.service';
import { Injectable, EventEmitter } from '@angular/core';

//@Injectable para usar un servicio dentro de otro servicio
@Injectable()
export class PersonasService{
    personas: Persona[] = [
        new Persona("Juan","Perez"), 
        new Persona("Laura","Juarez")
    ];
    saludar = new EventEmitter<number>();
    constructor(private logginService:LogginService){
    }
    agregarPersona(persona: Persona){
        this.logginService.enviarMensajeAConsola(`Agregamos persona ${persona.nombre}`);
        this.personas.push(persona);
    }
}