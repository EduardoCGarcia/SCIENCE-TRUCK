import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  { path:"inicio", component:InicioComponent},
  { path: 'divulgadores', loadChildren: () => import('./pages/divulgadores-page/divulgadores-page.module').then(m => m.DivulgadoresPageModule) },
  { path: 'cientificos', loadChildren: () => import('./pages/cientificos-page/cientificos-page.module').then(m => m.CientificosPageModule) },
  { path: 'productos', loadChildren: () => import('./pages/productos-page/productos-page.module').then(m => m.ProductosPageModule) },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  { path:'**',redirectTo:'inicio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
