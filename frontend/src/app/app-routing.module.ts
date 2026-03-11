import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"listarpensamento",
    pathMatch:"full"
  },
  {
    path:"criarpensamento",
    component:CriarPensamentoComponent
  },
  {
    path:"listarpensamento",
    component:ListarPensamentosComponent
  },
  {
    path:"pensamentos/excluirpensamento/:id",
    component: ExcluirPensamentoComponent
  },
  {
    path:"pensamentos/editarpensamento/:id",
    component: EditarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
