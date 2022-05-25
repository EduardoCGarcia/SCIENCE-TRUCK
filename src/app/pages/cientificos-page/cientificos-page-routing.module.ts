import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CientificoComponent } from './cientifico/cientifico.component';
import { CientificosPageComponent } from './cientificos-page.component';

const routes: Routes = [
  { path: '', component: CientificosPageComponent },
  { path: 'cientifico/:var', component: CientificoComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CientificosPageRoutingModule { }
