export interface Pedido {
  order_id: string;
  customer_id: string;
  order_status: string;
  order_purchase_timestamp: string;
  order_approved_at: string;
  order_delivered_carrier_date: string;
  order_delivered_customer_date: string;
  order_estimated_delivery_date: string
}

export interface Pedidos extends Array<Pedido> {}

export interface PedidosObj {
  [key: number]: Pedido;
}

