import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { DataService } from '../../service/data.service';
import { MicarritoService } from '../../service/micarrito.service';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.scss']
})
export class CardProductoComponent implements OnInit {

  @Input() producto!:Producto;

  constructor(
    public produtoSvc:ProductoService,
    private dataProductoSvc:DataService,
    private carritoSvc:MicarritoService
  ) { }

  ngOnInit(): void {
  }

  addCarrito(){
    this.carritoSvc.addProducto(this.producto).subscribe((data)=>{
      
    }),((error:any)=>{
      console.log(error);
    })
  }

}
