import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedidos } from '../models/Pedidos';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  pedidos!: Pedidos

  constructor(private http: HttpClient) { }

  fetchOrders() {
    return this.http.get<Pedidos>('http://localhost:3000/orders').pipe(
      map((res: Pedidos)=> {
        return this.pedidos = res
      })
    )
  }
}
