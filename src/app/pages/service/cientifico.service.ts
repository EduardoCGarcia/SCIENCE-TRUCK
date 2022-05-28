import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cientifico } from '../interfaces/cientifico.interface';

@Injectable({
  providedIn: 'root'
})
export class CientificoService {

  private apiURL = 'http://localhost:4000/api/Cientificos/';
  constructor(private http: HttpClient) { }

  getCientifico():Observable<Cientifico[]  >{
    return this.http.get<Cientifico[]>(this.apiURL)
  }
}
