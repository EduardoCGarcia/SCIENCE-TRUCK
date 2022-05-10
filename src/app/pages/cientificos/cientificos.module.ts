import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CientificosRoutingModule } from './cientificos-routing.module';
import { CientificosComponent } from './cientificos.component';
import { CientificoComponent } from './cientifico/cientifico.component';
import { CardComponent } from '../card/card.component';
import { CardCientificosComponent } from './card-cientificos/card-cientificos.component';




@NgModule({
  declarations: [
    CientificosComponent,
    CientificoComponent,
    CardComponent,
    CardCientificosComponent
  ],
  imports: [
    CommonModule,
    CientificosRoutingModule
  ]
})
export class CientificosModule { }
