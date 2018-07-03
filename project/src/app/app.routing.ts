import {Routes, RouterModule} from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { ListaColaboradoresComponent } from './lista-colaboradores/lista-colaboradores.component';
import { GerenciamentoComponent } from './gerenciamento/gerenciamento.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AdicionarColaboradorComponent } from './adicionar-colaborador/adicionar-colaborador.component';
import {EditarColaboradorComponent} from './editar-colaborador/editar-colaborador.component';

const APP_ROUTES: Routes = [
    {path: '', component: GridComponent},
    {path: 'listaColaboradores', component: ListaColaboradoresComponent},
    {path: 'gerenciamento', component: GerenciamentoComponent},
    {path: 'listaColaboradores/add', component:AdicionarColaboradorComponent},
    {path: 'listaColaboradores/edit', component: EditarColaboradorComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot (APP_ROUTES);
