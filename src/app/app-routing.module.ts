import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { EntretenimientoComponent } from './pages/entretenimiento/entretenimiento.component';
import { SabiasqueComponent } from './pages/sabiasque/sabiasque.component';

const routes: Routes = [
  { path:"inicio", component:InicioComponent},
  { path: 'divulgadores', loadChildren: () => import('./pages/divulgadores-page/divulgadores-page.module').then(m => m.DivulgadoresPageModule) },
  { path: 'cientificos', loadChildren: () => import('./pages/cientificos-page/cientificos-page.module').then(m => m.CientificosPageModule) },
  { path:"entretenimiento", component:EntretenimientoComponent},
  { path:"sabias-que", component:SabiasqueComponent},
  { path:'**',redirectTo:'inicio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
