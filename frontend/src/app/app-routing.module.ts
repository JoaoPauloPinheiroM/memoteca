import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './componentes/auth/auth.guard';
import { CadastroComponent } from './componentes/auth/cadastro/cadastro.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'criarpensamento',
    component: CriarPensamentoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'listarpensamento',
    component: ListarPensamentosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pensamentos/excluirpensamento/:id',
    component: ExcluirPensamentoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pensamentos/editarpensamento/:id',
    component: EditarPensamentoComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
