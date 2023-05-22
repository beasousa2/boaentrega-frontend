import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagamentos } from '../models/Pagamentos';
import {  map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagamentosService {

  pagamentos!: Pagamentos

  constructor(private http: HttpClient) { }

  fetchPayments() {
    return this.http.get<Pagamentos>('http://localhost:3002/payments').pipe(
      map((res: Pagamentos) =>{
      return this.pagamentos = res
    }))
  }
}
