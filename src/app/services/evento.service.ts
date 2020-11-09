import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import Evento from '../models/Evento'
@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private URL = "http://localhost:3000/eventos"
  
  constructor(private httpClient :HttpClient) {
 

   }

   httpsOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})

  }

  public get(): Observable<Evento>{
    return this.httpClient.get<Evento>(this.URL);;

  }

  public getToCategory(name){
    return this.httpClient.get<Evento>(this.URL+`?categoria=${name}`).pipe();

  }

   
}
