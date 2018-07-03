import { Component, OnInit } from '@angular/core';
import { DataServiceService} from '../data-service.service';
@Component({
  selector: 'app-gerenciamento',
  templateUrl: './gerenciamento.component.html',
  styleUrls: ['./gerenciamento.component.css']
})
export class GerenciamentoComponent implements OnInit {
  listaColaboradores = [];

  constructor(private dataService: DataServiceService) {
    this.listaColaboradores = [];
   }

  ngOnInit() {
    this.listaColaboradores = this.dataService.getData();
  }

}
