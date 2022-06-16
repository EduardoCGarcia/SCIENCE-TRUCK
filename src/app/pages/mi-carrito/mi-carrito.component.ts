import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Carrito } from '../interfaces/carrito.iterface';
import { Producto } from '../interfaces/producto.interface';
import { MicarritoService } from '../service/micarrito.service';

@Component({
  selector: 'app-mi-carrito',
  templateUrl: './mi-carrito.component.html',
  styleUrls: ['./mi-carrito.component.scss']
})
export class MiCarritoComponent implements OnInit {

  carrito !:Carrito[];
  
  constructor(public carritoSvc:MicarritoService) { }

  ngOnInit(): void {
    this.carritoSvc.getCarrito()
      .pipe(
        tap((carrito: Carrito[]) => this.carrito = carrito)
      )
      .subscribe()
  }

}
