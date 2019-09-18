import { Persona } from './persona.model';
import { LogginService } from './LogginService.service';
import { Injectable, EventEmitter } from '@angular/core';
import { DataServices } from './data.services';

//@Injectable para usar un servicio dentro de otro servicio
@Injectable()
export class PersonasService{
    personas: Persona[] = [];
    saludar = new EventEmitter<number>();
    constructor(private logginService:LogginService,
        private dataServices: DataServices){
    }
    setPersonas(personas : Persona[]){
        this.personas = personas;
    }
    obtenerPersonas(){
        return this.dataServices.cagarPersonas();
    }
    agregarPersona(persona: Persona){
        this.logginService.enviarMensajeAConsola(`Agregamos persona ${persona.nombre}`);
        if(this.personas == null){
            this.personas = [];
        }
        this.personas.push(persona);
        this.dataServices.guardarPersonas(this.personas);
    }
    getPersona(index:number){
        const persona: Persona = this.personas[index];
        return persona;
    }
    editPersona(index:number,persona: Persona){
        const personaEdit = this.personas[index];
        personaEdit.nombre = persona.nombre;
        personaEdit.apellido = persona.apellido;
        this.dataServices.modificarPersona(index,persona);
    }
    removePersona(index:number){
        this.personas.splice(index,1);
        this.dataServices.eliminarPersona(index);
        //Se vuelve a guardar el arreglo, para regenerar los indices de la BD
        this.modificarPersonas();
    }
    modificarPersonas(){
        if(this.personas != null){
            this.dataServices.guardarPersonas(this.personas);
        }
    }
}