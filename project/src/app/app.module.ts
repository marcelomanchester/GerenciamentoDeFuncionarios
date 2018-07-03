import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { ListaColaboradoresComponent } from './lista-colaboradores/lista-colaboradores.component';
import { GerenciamentoComponent } from './gerenciamento/gerenciamento.component';
import { routing } from './app.routing';
import { AdicionarColaboradorComponent } from './adicionar-colaborador/adicionar-colaborador.component';
import { EditarColaboradorComponent } from './editar-colaborador/editar-colaborador.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ListaColaboradoresComponent,
    GerenciamentoComponent,
    AdicionarColaboradorComponent,
    EditarColaboradorComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
