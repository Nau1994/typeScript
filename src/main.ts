function LogProperty(target: any, property: string) {
  console.log("property decorator");
  console.log(target);
  console.log(property);
}

function Log1(target: any, name: any, descriptor: PropertyDescriptor) {
  console.log("accesser decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log2(target: any, name: any, descriptor: PropertyDescriptor) {
  console.log("method decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: any, position: number) {
  console.log("parameter decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  // @LogProperty
  title: string;
  private _price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  // @Log1
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("price should be positive number");
    }
  }

  // @Log2
  getTaxPrice(//@Log3 
    tax: number) {
    return this._price * tax;
  }
}
