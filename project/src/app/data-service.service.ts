import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private data = [];
  private singleData = null;
  private check:boolean;
  private index;

  constructor() { }

  setData(data){
    this.data.push(data);
  }
  deleteData(i){
    this.data.splice(i, 1);
    return this.data;
  }
  getData(){
    return this.data;
  }
  setColaborador(colaborador, i){
    this.singleData = colaborador;
    this.index = i;
  }
  getColaborador(){
    return this.singleData;
  }
  editData(dict){
    this.data[this.index] = dict;
  }
}

