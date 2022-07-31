"use strict";
function LogProperty(target, property) {
    console.log("property decorator");
    console.log(target);
    console.log(property);
}
function Log1(target, name, descriptor) {
    console.log("accesser decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log2(target, name, descriptor) {
    console.log("method decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, position) {
    console.log("parameter decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    set price(value) {
        if (value > 0) {
            this._price = value;
        }
        else {
            throw new Error("price should be positive number");
        }
    }
    getTaxPrice(tax) {
        return this._price * tax;
    }
}
