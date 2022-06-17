import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiURL = 'http://localhost:4000/api/Productos/';
  constructor(private http: HttpClient) { }

  getProducto():Observable<Producto[]  >{
    return this.http.get<Producto[]>(this.apiURL)
  }
  
}
