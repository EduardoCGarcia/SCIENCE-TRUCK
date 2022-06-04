import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';
import { AuthService } from '../service/auth.service';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-productos-page',
  templateUrl: './productos-page.component.html',
  styleUrls: ['./productos-page.component.scss']
})
export class ProductosPageComponent implements OnInit {
  productos !: Producto[];
  
  constructor(private productosSvc: ProductoService, public authSvc:AuthService) { }

  ngOnInit(): void {
    this.productosSvc.getProducto()
      .pipe(
        tap((productos: Producto[]) => this.productos = productos)
      )
      .subscribe()
  }

}
