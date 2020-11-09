import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import Participante from 'src/app/models/Participante';
import { ParticipanteService } from '../../services/participante.service'
import { EventoParticipanteService } from '../../services/evento-participante.service'
import Inscricao from '../../models/Inscricao'
@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css']
})
export class InscricaoComponent implements OnInit {

  paramId: any;
  id_evento: any;
  participante;
  qrCode: string = "";
  todasInscricoes;

  constructor(private activatedRoute: ActivatedRoute, private participanteService: ParticipanteService, private eventoParticipanteService: EventoParticipanteService) {


  }



  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.paramId = params.id;


    });
    this.activatedRoute.queryParams.subscribe(params => {
      this.id_evento = params.id_evento;

    });

    this.refresh();
    this. inputInscricao();
  }

  onClick(e) {
    window.print();

  }

  refresh() {
    this.participanteService.getById(this.paramId).subscribe(data => {
      this.participante = data;

    });
    
  }

  inputInscricao(){
    this.qrCode = this.gerandoNumeroAleatorio();
    this.eventoParticipanteService.post({id_participante: this.paramId, id_evento: this.id_evento,inscricao: this.qrCode.toString(), date: new Date().toString()});


  }

  gerandoNumeroAleatorio() {
    let valor = Math.floor(Math.random() * 10000000000);
    return valor.toString();



  }


  // verficarRepetidos(valor) {
  //   // let repo = [this.todasInscricoes ].map(e => e.inscricao)
  //   if (!repo.includes(valor)) {
  //     return valor

  //   }

  // }

}
