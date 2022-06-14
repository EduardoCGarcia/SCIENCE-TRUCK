  import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-divulgador',
  templateUrl: './divulgador.component.html',
  styleUrls: ['./divulgador.component.scss']
})
export class DivulgadorComponent implements OnInit {

  constructor(public data:DataService) { }

  ngOnInit(): void {
  }

}
