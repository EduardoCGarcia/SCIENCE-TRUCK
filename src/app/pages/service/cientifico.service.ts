import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cientifico } from '../interfaces/cientifico.interface';

@Injectable({
  providedIn: 'root'
})
export class CientificoService {

  private apiURL = 'http://localhost:3000/cientificos';
  constructor(private http: HttpClient) { }

  getDivulgador():Observable<Cientifico[]  >{
    return this.http.get<Cientifico[]>(this.apiURL)
  }
}
