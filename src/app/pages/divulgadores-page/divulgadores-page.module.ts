import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DivulgadoresPageRoutingModule } from './divulgadores-page-routing.module';
import { DivulgadoresPageComponent } from './divulgadores-page.component';
import { CardDivulgadorComponent } from './card-divulgador/card-divulgador.component';
import { DivulgadorComponent } from './divulgador/divulgador.component';
import { CardComponent } from '../card/card.component';



@NgModule({
  declarations: [
    DivulgadoresPageComponent,
    CardDivulgadorComponent,
    DivulgadorComponent
  ],
  imports: [
    CommonModule,
    DivulgadoresPageRoutingModule
  ]
})
export class DivulgadoresPageModule { }
