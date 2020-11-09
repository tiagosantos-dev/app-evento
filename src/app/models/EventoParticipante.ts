import { partition } from 'rxjs';

export default class EventoParticipante {

    
    id_participante:string;
    id_evento:number; 
    inscricao: number;
    data = Date.now;

    constructor(id_participante:string, id_evento:number, inscricao: number, data = Date.now){
        

    }


}