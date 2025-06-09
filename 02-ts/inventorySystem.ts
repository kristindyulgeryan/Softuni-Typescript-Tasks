class Product {
  private static _productCount = 0;
  public readonly id: number;
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    Product._productCount++;
    this.id = Product._productCount;

    this._name = name;
    this._price = price;
  }

  public static get productCount(): number {
    return Product._productCount;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    if (value.trim().length < 1) {
      throw new Error("Product name must be at least 1 character long.");
    }
    this._name = value;
  }

  public get price(): number {
    return this._price;
  }

  public set price(value: number) {
    if (value <= 0) {
      throw new Error("Price must be greater than 0.");
    }
    this._price = value;
  }

  public getDetails(): string {
    return `ID: ${this.id}, Name: ${this._name}, Price: $${this._price}`;
  }
}

class Inventory {
  private products: Product[] = [];

  public addProduct(product: Product): void {
    this.products.push(product);
  }

  public listProducts(): string {
    const productDetails = this.products.map((p) => p.getDetails()).join("\n");
    return `${productDetails}\nTotal products created: ${Product.productCount}`;
  }
}

const inventory = new Inventory();

const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);

inventory.addProduct(product1);
inventory.addProduct(product2);

console.log(inventory.listProducts());
