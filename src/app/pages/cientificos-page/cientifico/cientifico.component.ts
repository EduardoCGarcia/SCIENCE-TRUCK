import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-cientifico',
  templateUrl: './cientifico.component.html',
  styleUrls: ['./cientifico.component.scss']
})
export class CientificoComponent implements OnInit {

  constructor(public data:DataService) { }

  ngOnInit(): void {
  }

}
