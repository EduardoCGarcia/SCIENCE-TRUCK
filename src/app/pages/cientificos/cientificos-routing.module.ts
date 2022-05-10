import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CientificoComponent } from './cientifico/cientifico.component';
import { CientificosComponent } from './cientificos.component';

const routes: Routes = [
  { path: '', component: CientificosComponent },
  { path: 'cientifico/:var', component: CientificoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CientificosRoutingModule { }
