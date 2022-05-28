import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosPageComponent } from './productos-page.component';

const routes: Routes = [{ path: '', component: ProductosPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosPageRoutingModule { }
