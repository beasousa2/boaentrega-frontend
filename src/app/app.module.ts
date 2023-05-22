import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/home/home.component';

import { NgApexchartsModule } from "ng-apexcharts";
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CardsHomeComponent } from './components/cards-home/cards-home.component';
import { GraficoBarComponent } from './components/grafico-bar/grafico-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { FinanceiroComponent } from './pages/financeiro/financeiro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PerfilComponent,
    GraficoBarComponent,
    CardsHomeComponent,
    HeaderComponent,
    MenuComponent,
    DashboardComponent,
    PedidosComponent,
    FinanceiroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgApexchartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
