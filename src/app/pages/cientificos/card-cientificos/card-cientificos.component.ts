import { Component, Input, OnInit } from '@angular/core';
import { Divulgador } from '../../interfaces/divulgador.interface';

@Component({
  selector: 'app-card-cientificos',
  templateUrl: './card-cientificos.component.html',
  styleUrls: ['./card-cientificos.component.scss']
})
export class CardCientificosComponent implements OnInit {

  @Input() divulgador!:Divulgador;
  
  constructor() { }

  ngOnInit(): void {
  }

}
