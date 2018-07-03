import { Component} from '@angular/core';
import { DataServiceService} from '../data-service.service';

@Component({
  selector: 'adicionar-colaborador',
  templateUrl: './adicionar-colaborador.component.html',
  styleUrls: ['./adicionar-colaborador.component.css']
})
export class AdicionarColaboradorComponent {
  nome: string = null;
  idade: number = null;
  salário: number = null;
  cargo: string = null;
  check: boolean = null;
  internalDict = {};
  cargos: any[] = ["dev","gerente","dono"];
  selectedValue = null;


  constructor(private dataService:DataServiceService) {
    this.nome;
    this.idade;
    this.salário;
    this.cargo; 
    this.check;
    this.internalDict = { };
   }
   addFuncionario(){
     this.addNome();
     this.addSalario();
     this.addCargo();
     this.addIdade();
     if(this.checkFuncionario(this.internalDict)){
      this.dataService.setData(this.internalDict);
      this.internalDict = {};
    }  
   }
   checkFuncionario(Dict):boolean{
    if(this.checkNome(this.internalDict['nome'])){
      if(this.checkSalario(this.internalDict['salário'])){
        if(this.checkIdade(this.internalDict['idade'])){
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

   // NOME
  updateNome(event){
    this.nome = event.target.value;
  }
  addNome(){
    this.nome = this.nome.trim();
    if(this.checkNome(this.nome)){
      this.internalDict['nome'] = this.nome;
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

  // CARGO
  addCargo(){
    this.cargo = this.cargo.trim();
    this.internalDict['cargo'] = this.cargo;
  }
  updateCargo(event){
    this.cargo = event.target.value;
  }

  // SALARIO
  updateSalario(event){
    this.salário = event.target.value;
  }
  addSalario(){
    this.internalDict['salario'] = this.salário;
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

  // IDADE
  updateIdade(event){
    this.idade = event.target.value;
  }
  addIdade(){
    this.internalDict['idade'] = this.idade;
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
}

