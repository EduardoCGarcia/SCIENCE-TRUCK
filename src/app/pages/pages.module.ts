import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

import { InicioComponent } from './inicio/inicio.component';
import { EntretenimientoComponent } from './entretenimiento/entretenimiento.component';
import { SabiasqueComponent } from './sabiasque/sabiasque.component';
import { CardComponent } from '../components/card/card.component';

@NgModule({
  declarations: [
    InicioComponent,
    EntretenimientoComponent,
    SabiasqueComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
