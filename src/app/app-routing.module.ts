import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { VerifiComponent } from './verifi/verifi.component';
import { BancComponent } from './banc/banc.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { ContadorComponent } from './contador/contador.component';
import { DresscodeComponent } from './dresscode/dresscode.component';
import { InvitadoComponent } from './invitado/invitado.component';
import { RecepcionComponent } from './recepcion/recepcion.component';

const routes: Routes = [
  { path: '', component: VerifiComponent },
  {path: 'inicio', component:InicioComponent},
  {path: 'banc', component:BancComponent},
  {path: 'calendar', component:CalendarioComponent},
  {path: 'cont', component:ContadorComponent},
  {path: 'dress', component:DresscodeComponent},
  {path: 'inv', component:InvitadoComponent},
  {path: 'rec', component:RecepcionComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
