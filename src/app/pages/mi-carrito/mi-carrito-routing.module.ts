import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiCarritoComponent } from './mi-carrito.component';
import { MisProductosComponent } from './mis-productos/mis-productos.component';

const routes: Routes = [{ path: '', component: MiCarritoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiCarritoRoutingModule { }
