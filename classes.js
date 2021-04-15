class Product {
  constructor(productName) {
    this.name = productName
  }
  display() {
    return 'For Sale: ' + this.name
  }
}

class item extends Product {
  constructor(productName, sku, style, qty) {
    super(productName)
    this.sku = sku
    this.style = style
    this.qty = qty
  }
  itemDisplay() {
    return this.display() + `, ${this.style} (${this.sku}) (${this.qty})`
  }
  sellSome(qtySold) {
    this.qty -= qtySold
  }
  getSome(qtyReceived){
      this.qty += qtyReceived
  }
}

let item1 = new item('shirt', 'TKL', 'large black', 10)
console.log(item1.display())
console.log(item1.itemDisplay())
item1.sellSome(3)
console.log(item1.itemDisplay())
item1.getSome(25)
console.log(item1.itemDisplay())
