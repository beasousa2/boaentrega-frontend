export interface Pagamento {
    order_id: string;
    payment_sequential: number;
    payment_type: string;
    payment_installments: number;
    payment_value: number;
  }

  export interface Pagamentos extends Array<Pagamento> {}

  export interface PagamentosObj {
    [key: number]: Pagamento;
  }

