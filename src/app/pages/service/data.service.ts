import { Injectable } from '@angular/core';
import { Cientifico } from '../interfaces/cientifico.interface';
import { Divulgador } from '../interfaces/divulgador.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  divulgador!:Divulgador;
  cientifico!:Cientifico;
  

  constructor() { }
}
