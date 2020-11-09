import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-card-evento',
  templateUrl: './card-evento.component.html',
  styleUrls: ['./card-evento.component.css']
})
export class CardEventoComponent implements OnInit {


  @Input() evento: any;

  icon: string = ''

  constructor() {

  }

  ngOnInit(): void {

  }


  backgroundIcon(categoria) {
    switch (categoria) {
      case "Palestras":
        this.icon = "fa-chalkboard-teacher"
        return "linear-gradient(to right , #114357, #F29492)"
        break;
      case "Tecnológicos":
        this.icon = "fa-wifi"
        return "linear-gradient(to right, rgb(142, 14, 0), rgb(31, 28, 24))"
        break;
      case "Seminários":
        this.icon = "fa-window-restore"
        return "linear-gradient(to right, rgb(142, 158, 171), rgb(238, 242, 243))"
        break;
      case "Semanais":
        this.icon = "fa-calendar-week"
        return "linear-gradient(to right, rgb(131, 58, 180), rgb(253, 29, 29), rgb(252, 176, 69))"
        break;
      case "Esportivos":
        this.icon = "fa-futbol"
        return "linear-gradient(to right, rgb(254, 172, 94), rgb(199, 121, 208), rgb(75, 192, 200))"
        break;
      default:
        break;
    }


  }
}



