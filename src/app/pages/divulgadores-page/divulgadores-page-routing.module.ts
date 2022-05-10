import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivulgadorComponent } from './divulgador/divulgador.component';
import { DivulgadoresPageComponent } from './divulgadores-page.component';

const routes: Routes = [
  { path: '', component: DivulgadoresPageComponent },
  { path: 'divulgador/:var ', component: DivulgadorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DivulgadoresPageRoutingModule { }
