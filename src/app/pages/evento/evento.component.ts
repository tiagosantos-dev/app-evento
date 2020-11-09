import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {EventoService} from '../../services/evento.service'

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
 
  eventos :any = [];

  constructor(private eventoService : EventoService) { 
   
  }
  

  ngOnInit() {
    this.refresh();
    
  }

  refresh(){
    this.eventoService.get().subscribe(data=>{
      this.eventos =  data;
    })

  }

  onClickHeader(categoria){
    if(categoria == "Inicio"){
      this.refresh();

    }else{
      this.eventoService.getToCategory(categoria).subscribe(data=>{
        this.eventos = data;
  
      });
    }

  }


}
