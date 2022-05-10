import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Divulgador } from '../interfaces/divulgador.interface';
import { DivulgadorService } from '../service/divulgador.service';

@Component({
  selector: 'app-cientificos',
  templateUrl: './cientificos.component.html',
  styleUrls: ['./cientificos.component.scss']
})
export class CientificosComponent implements OnInit {
  divulgadores !: Divulgador[];
  
  constructor(private divulgadoresSvc: DivulgadorService) { }

  ngOnInit(): void {
    this.divulgadoresSvc.getDivulgador()
      .pipe(
        tap((divulgadores: Divulgador[]) => this.divulgadores = divulgadores)
      )
      .subscribe()
  }

}
