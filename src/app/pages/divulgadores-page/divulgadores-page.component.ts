import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Divulgador } from '../interfaces/divulgador.interface';
import { AuthService } from '../service/auth.service';
import { DivulgadorService } from '../service/divulgador.service';

@Component({
  selector: 'app-divulgadores-page',
  templateUrl: './divulgadores-page.component.html',
  styleUrls: ['./divulgadores-page.component.scss']
})
export class DivulgadoresPageComponent implements OnInit {
  divulgadores !: Divulgador[];
  
  //divulgador!:Divulgador; //es la variable en la que se guardara el valor que emita el componente hijo

  constructor(
    private divulgadoresSvc: DivulgadorService,
    public authSvc:AuthService) { }

  ngOnInit(): void {
    this.divulgadoresSvc.getDivulgador()
      .pipe(
        tap((divulgadores: Divulgador[]) => this.divulgadores = divulgadores)
      )
      .subscribe()
  }
}
