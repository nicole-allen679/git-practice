class Product {
  constructor(productName) {
    this.name = productName
  }
  display() {
    console.log('For Sale: ' + this.name)
  }
}

let prod1 = new Product('shirt')
prod1.display()