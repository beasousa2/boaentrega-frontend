import { Component, OnInit } from '@angular/core';
import { Pagamentos, PagamentosObj } from 'src/app/models/Pagamentos';
import { PagamentosService } from 'src/app/service/pagamentos.service';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.css']
})
export class FinanceiroComponent implements OnInit {

  pagamentosObj: PagamentosObj = {}
  constructor(private service: PagamentosService) { }

  ngOnInit(): void {
    this.fetchPagamentos()
  }

  fetchPagamentos() {
    this.service.fetchPayments().subscribe((res: Pagamentos)=> {
      for (let i = 0; i < res.length; i++) {
        this.pagamentosObj[i] = res[i];
      }
    })
  }

}
