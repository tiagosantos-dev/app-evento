import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventoComponent } from './pages/evento/evento.component';
import {ParticipanteComponent } from './pages/participante/participante.component';
import { InscricaoFinalizadaComponent } from './pages/inscricao-finalizada/inscricao-finalizada.component'

const routes: Routes = [
  { path:"",  component: EventoComponent },
  { path:"cadastrar",  component: ParticipanteComponent },
  {path:"inscricao/:id", component: InscricaoFinalizadaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
