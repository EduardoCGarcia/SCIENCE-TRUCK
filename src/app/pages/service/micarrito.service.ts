import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrito } from '../interfaces/carrito.iterface';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class MicarritoService {
  
  private apiURL = 'http://localhost:4000/api/Carrito/';

  constructor(private http: HttpClient) { }

  getCarrito():Observable<Carrito[]>{
    return this.http.get<Carrito[]>(this.apiURL)
  }

  deleteProducto(_id:string){
    return this.http.delete(this.apiURL+_id);
  }

  addProducto(prod : Producto){
    return this.http.post(this.apiURL,prod)
    
  }
}
