import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CientificosPageRoutingModule } from './cientificos-page-routing.module';
import { CientificosPageComponent } from './cientificos-page.component';
import { CardCientificosComponent } from './card-cientificos/card-cientificos.component';
import { CientificoComponent } from './cientifico/cientifico.component';


@NgModule({
  declarations: [
    CientificosPageComponent,
    CardCientificosComponent,
    CientificoComponent
  ],
  imports: [
    CommonModule,
    CientificosPageRoutingModule
  ]
})
export class CientificosPageModule { }
