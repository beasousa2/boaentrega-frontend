import { Component, OnInit } from '@angular/core';
import { Pedidos, Pedido, PedidosObj } from 'src/app/models/Pedidos';
import { PedidosService } from 'src/app/service/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos: PedidosObj = {}
  constructor(private service: PedidosService) { }

  ngOnInit(): void {
    this.fetchOrders()
  }

  fetchOrders() {
    this.service.fetchOrders().subscribe((res: Pedidos) => {
      res.sort((a, b) => a.order_id.localeCompare(b.order_id)); // Ordena pelo id
      for (let i = 0; i < res.length; i++) {
        this.pedidos[i] = res[i];
      }
    });
  }


}
