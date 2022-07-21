import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAnotacaoComponent } from './components/create-anotacao/create-anotacao.component';
import { CreateComponent } from './components/create/create.component';
import { FinalizadosComponent } from './components/finalizados/finalizados.component';
import { ListagemFeiraComponent } from './components/listagem-feira/listagem-feira.component';
import { ReadAllComponent } from './components/read-all/read-all.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {
  path:'', component: ReadAllComponent
  },
  {
    path:'finalizados', component: FinalizadosComponent
  },
  {
    path:'createtarefa', component: CreateComponent
  },
  {
    path:'updatetarefa/:id', component: UpdateComponent
  },
  {
    path:'anotacoes/:id', component: CreateAnotacaoComponent
  },
  {
    path:'listagem-feira', component: ListagemFeiraComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
