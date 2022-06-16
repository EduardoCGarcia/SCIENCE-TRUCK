import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Carrito } from '../../interfaces/carrito.iterface';
import { Producto } from '../../interfaces/producto.interface';
import { MicarritoService } from '../../service/micarrito.service';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.component.html',
  styleUrls: ['./mis-productos.component.scss']
})
export class MisProductosComponent implements OnInit {

  @Input() carrito !:Carrito;

  constructor(public carritoSvc:MicarritoService) { }

  ngOnInit(): void {
  }

  eliminar():void{
    alert(this.carrito.nombre);
  }

}
