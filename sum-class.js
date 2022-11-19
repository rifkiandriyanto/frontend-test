class OrderItem {
  constructor(orderId, productId, quantity, price) {
    this.orderId = orderId;
    this.productId = productId;
    this.quantity = quantity;
    this.price = price;
  }

  get total() {
    return this.quantity * this.price;
  }
}

 orderItem = new OrderItem(1, 1, 2, 100);
