import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

import { Observable} from 'rxjs'
import Participante from '../models/Participante';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteService {

  constructor(private http : HttpClient) { }

  private URL = "http://localhost:3000/participantes/"


  post(obj) : Observable<any>{
    return this.http.post(this.URL, obj).pipe();

  }

  getById(id){
    return this.http.get<Observable<Participante>>(this.URL+id).pipe();

  }

}
