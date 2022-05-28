import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { DataService } from '../../service/data.service';
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
    private dataProductoSvc:DataService
  ) { }

  ngOnInit(): void {
  }

  addProductoCarrito(){
    alert("Producto agregado");
  }

}
