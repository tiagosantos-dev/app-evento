import { Component, OnInit } from '@angular/core';
// import { read  } from 'fs';

import { ImageCroppedEvent } from 'ngx-image-cropper';
import Participante from '../../models/Participante';
import { NotificationService } from '../../services/notification.service'
import { Router } from '@angular/router'
import { ParticipanteService } from '../../services/participante.service'

import { ActivatedRoute } from '@angular/router';
// import { type } from 'os';

@Component({
    selector: 'app-form-participante',
    templateUrl: './form-participante.component.html',
    styleUrls: ['./form-participante.component.css']
})
export class FormParticipanteComponent implements OnInit {

    constructor(private notification: NotificationService,
        private router: Router, private participanteService: ParticipanteService, private activatedRoute: ActivatedRoute) { }

    public participante = {
        id: null,
        nome: "",
        cpf: "",
        email: "",
        celular: "",
        imagem: ""

    }

    visualizar: boolean = false;
    titulo: any;
    obj: Participante;
    eventoId: any;
    ngOnInit(): void {

        this.activatedRoute.queryParams.subscribe(params => {
            console.log(params.nomeEvento)
            this.titulo = params["nomeEvento"]
            this.eventoId = params["eventoId"]
        });

    }

    onChange(e) {
        let file = e.target.files[0];


    }

    imageChangedEvent: any = '';
    croppedImage: any = '';

    fileChangeEvent(event: any): void {
        this.visualizar = true;
        this.imageChangedEvent = event;

        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onloadend = function () {
        }
        reader.readAsDataURL(file);
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
        this.participante.imagem = this.croppedImage;
    }
    imageLoaded() {

    }
    cropperReady() {
    }
    loadImageFailed() {
    }

    onClick(e, inputImage) {
        const res = this.validation(this.participante);
        this.responseOk(res);
        if (this.obj) {

        }

    }
    async responseOk(response) {
        if (response == true) {
            await this.participanteService.post(this.participante).subscribe(response => {
                this.router.navigate(["/inscricao", response.id], { queryParams: { "id_evento": this.eventoId } })


            });

        }


    }

    validation(participante) {
        if (participante.nome.length === 0) {
            this.notification.showWarning("Campo Nome não definido.", "NÃO DEFINIDO");
        }
        else if (participante.cpf.length === 0) {
            this.notification.showWarning("Campo CPF não definido.", "NÃO DEFINIDO");

        }
        else if (participante.cpf.length < 11) {
            this.notification.showWarning("Campo CPF deve ter 11 digitos", "CPF INVALIDO");

        }
        else if (participante.email.length === 0) {
            this.notification.showWarning("Campo Email não definido.", "NÃO DEFINIDO");
        }
        else if (participante.celular.length === 0) {
            this.notification.showWarning("Campo Celular não definido.", "NÃO DEFINIDO");
        }
        else if (participante.imagem.length === 0) {
            this.notification.showWarning("Campo Imagem não definido.", "NÃO DEFINIDO");
        } else {
            return true;

        }

    }
}

