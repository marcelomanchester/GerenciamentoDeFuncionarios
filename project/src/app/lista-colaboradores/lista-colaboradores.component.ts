import { Component, OnInit } from '@angular/core';
import { DataServiceService} from '../data-service.service';

@Component({
  selector: 'lista-colaboradores',
  templateUrl: './lista-colaboradores.component.html',
  styleUrls: ['./lista-colaboradores.component.css'],
})
export class ListaColaboradoresComponent implements OnInit {
  listaColaboradores = [];

  constructor(private dataService: DataServiceService) {
    this.listaColaboradores = [];
  }
  ngOnInit(){
    this.listaColaboradores = this.dataService.getData();
  }
  delColaborador(i){
    this.listaColaboradores = this.dataService.deleteData(i);
  }
  selecionado(colaborador, i){
    this.dataService.setColaborador(colaborador, i);
  }
}




