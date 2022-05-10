import { Component, Input, OnInit } from '@angular/core';
import { Divulgador } from 'src/app/pages/interfaces/divulgador.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() divulgador!:Divulgador;

  constructor() { }

  ngOnInit(): void {
  }

}
