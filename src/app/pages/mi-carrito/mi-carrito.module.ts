import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiCarritoRoutingModule } from './mi-carrito-routing.module';
import { MiCarritoComponent } from './mi-carrito.component';
import { MisProductosComponent } from './mis-productos/mis-productos.component';


@NgModule({
  declarations: [
    MiCarritoComponent,
    MisProductosComponent
  ],
  imports: [
    CommonModule,
    MiCarritoRoutingModule
  ]
})
export class MiCarritoModule { }
