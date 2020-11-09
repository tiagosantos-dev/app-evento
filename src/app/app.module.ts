import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventoComponent } from './pages/evento/evento.component';
import { ParticipanteComponent } from './pages/participante/participante.component';
import { CardEventoComponent } from './components/card-evento/card-evento.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormParticipanteComponent } from './components/form-participante/form-participante.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import {HttpClientModule } from '@angular/common/http';
import { ImageCropperModule } from 'ngx-image-cropper';
import {FormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InscricaoFinalizadaComponent } from './pages/inscricao-finalizada/inscricao-finalizada.component';
import { InscricaoComponent } from './components/inscricao/inscricao.component';
import { QRCodeModule } from 'angularx-qrcode';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    EventoComponent,
    ParticipanteComponent,
    CardEventoComponent,
    HeaderComponent,
    FooterComponent,
    FormParticipanteComponent,
    InscricaoFinalizadaComponent,
    InscricaoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ImageCropperModule,
    FormsModule,
    BrowserAnimationsModule,
    QRCodeModule,
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
