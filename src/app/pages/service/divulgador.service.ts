import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Divulgador } from '../interfaces/divulgador.interface';

@Injectable({
  providedIn: 'root'
})
export class DivulgadorService {
  private apiURL = 'http://localhost:3000/divulgadores';
  constructor(private http: HttpClient) { }

  getDivulgador():Observable<Divulgador[]  >{
    return this.http.get<Divulgador[]>(this.apiURL)
  }
}
