import { Persona } from './persona.model';

export class PersonasService{
    personas: Persona[] = [
        new Persona("Juan","Perez"), 
        new Persona("Laura","Juarez")
    ];
    agregarPersona(persona: Persona){
        //this.logginService.enviarMensajeAConsola(`Arregramos al arreglo ${persona.nombre}` );
        this.personas.push(persona);
        
    }
}