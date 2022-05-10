import { Injectable } from '@angular/core';
import { Divulgador } from '../interfaces/divulgador.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  divulgador!:Divulgador;

  constructor() { }
}
