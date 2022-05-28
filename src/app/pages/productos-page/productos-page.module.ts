import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosPageRoutingModule } from './productos-page-routing.module';
import { ProductosPageComponent } from './productos-page.component';
import { CardProductoComponent } from './card-producto/card-producto.component';
import { ProductoComponent } from './producto/producto.component';


@NgModule({
  declarations: [
    ProductosPageComponent,
    CardProductoComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    ProductosPageRoutingModule
  ]
})
export class ProductosPageModule { }
