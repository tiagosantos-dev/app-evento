import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { EventoService } from '../../services/evento.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  @Output() dadosEvent = new EventEmitter();

  constructor(private eventoService: EventoService) { }
  sider: boolean = false;
  ngOnInit(): void {
  }

  public showSider(e) {
    this.sider = !this.sider;

  }

  onClick(e) {
    this.dadosEvent.emit(e.target.innerHTML)

  }

}
