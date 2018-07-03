import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-editar-colaborador',
  templateUrl: './editar-colaborador.component.html',
  styleUrls: ['./editar-colaborador.component.css']
})
export class EditarColaboradorComponent implements OnInit {
  colaboradorSelecionado = {};
  check: boolean;
  salário;
  cargo;
  nome;
  idade;
  internalDict = {};

  constructor(private dataService: DataServiceService) {
    this.colaboradorSelecionado = {};
   }

  ngOnInit() {
    this.colaboradorSelecionado = this.dataService.getColaborador();
    this.atribuição();
  }
  atribuição(){
    this.nome = this.colaboradorSelecionado['nome'];
    this.idade = this.colaboradorSelecionado['idade'];
    this.cargo = this.colaboradorSelecionado['cargo'];
    this.salário = this.colaboradorSelecionado['salario'];
  }
  addEdit(){
    this.colaboradorSelecionado['nome'] = this.nome;
    this.colaboradorSelecionado['idade'] = this.idade;
    this.colaboradorSelecionado['cargo'] = this.cargo;
    this.colaboradorSelecionado['salario'] = this.salário;
    this.dataService.editData(this.colaboradorSelecionado);
  }
  checkFuncionario():boolean{
    if(this.checkNome(this.nome)){
      if(this.checkSalario(this.salário)){
        if(this.checkIdade(this.idade)){
          this.addEdit();
          return(this.check);
        }
        else{
          return(this.check);
        }
      }
      else{
        return(this.check);
      }
    }
    else{
      return(this.check);
    }
  }
  checkNome(nome):boolean{
    if (this.nome.length > 35 || this.nome.length == 0 ){
      this.check = false;
      return(this.check);
    }
    else{
      this.check = true;
      return(this.check)
    }
  }
  checkSalario(salario):boolean{
    if(600 < this.salário || this.salário > 20000){
      this.check = true;
      return(this.check)
    }
    else{
      this.check = false;
      return(this.check)
    }
  }
  checkIdade(idade){
    if(this.idade >= 18){
      if(this.idade <= 80){
        this.check = true;
        return(this.check);
      }
      else{
        this.check = false;
        return(this.check);
      }
    }
    else{
      this.check = false;
      return(this.check);
    }
  }
  updateNome(event){
    this.nome = event.target.value;
  }
  updateIdade(event){
    this.idade = event.target.value;
  }
  updateSalario(event){
    this.salário = event.target.value;
  }
  updateCargo(event){
    this.cargo = event.target.value; 
  }

}
