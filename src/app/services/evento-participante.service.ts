import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import EventoParticipante from '../models/EventoParticipante';

@Injectable({
  providedIn: 'root'
})
export class EventoParticipanteService {

  private URL = "http://localhost:3000/EventoParticipante";

  constructor(private http: HttpClient) {

    
   }
   getInscricao() : Observable<EventoParticipante>{
    return this.http.get<EventoParticipante>(this.URL).pipe();
      
  }

  post(data) : Observable<EventoParticipante>{
    return this.http.post<EventoParticipante>(this.URL, data).pipe();
      
  }
}
