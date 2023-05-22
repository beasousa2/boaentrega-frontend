import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { FinanceiroComponent } from './pages/financeiro/financeiro.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'login'
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "perfil",
        component: PerfilComponent,

      },
      {
        path: "financeiro",
        component: FinanceiroComponent,

      },
      {
        path: "pedidos",
        component: PedidosComponent,

      },
      {
        path: "dashboard",
        component: DashboardComponent,

      }
    ]
  },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
