import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Divulgador } from '../../interfaces/divulgador.interface';
import { AuthService } from '../../service/auth.service';
import { DataService } from '../../service/data.service';
import { DivulgadorService } from '../../service/divulgador.service';

@Component({
  selector: 'app-card-divulgador',
  templateUrl: './card-divulgador.component.html',
  styleUrls: ['./card-divulgador.component.scss']
})
export class CardDivulgadorComponent implements OnInit {

  @Input() divulgador!:Divulgador;//esta es necesaria para manejar los datos entre el componente card y el principal
  /*@Output() eventoDivulgador = new EventEmitter<Divulgador>() */
  constructor(
    public divulgadorSvc:DivulgadorService,
    private dataDivulgadorSvc:DataService,
    public authSvc: AuthService
    ) { }

  ngOnInit(): void {
  } 
   
  /*Evento que hara el cambio en la variable del componente padre*/
  /* emitirDivulgador(){
    this.eventoDivulgador.emit(this.divulgador);
  } */

  emitirDivulgador(){
    this.dataDivulgadorSvc.divulgador=this.divulgador;
  }  




}
