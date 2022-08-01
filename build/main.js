"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const validatorObj = {};
function Required(target, name) {
    let dec = ["required"];
    if (validatorObj[target.constructor.name]) {
        if (validatorObj[target.constructor.name][name]) {
            dec = validatorObj[target.constructor.name][name];
            dec.push("required");
        }
    }
    validatorObj[target.constructor.name] = Object.assign(Object.assign({}, validatorObj[target.constructor.name]), { [name]: dec });
}
function Positive(target, name) {
    let dec = ["positive"];
    if (validatorObj[target.constructor.name]) {
        if (validatorObj[target.constructor.name][name]) {
            dec = validatorObj[target.constructor.name][name];
            dec.push("positive");
        }
    }
    validatorObj[target.constructor.name] = Object.assign(Object.assign({}, validatorObj[target.constructor.name]), { [name]: dec });
}
function Validate(Courseobj) {
    let validateProperty = validatorObj[Courseobj.constructor.name];
    let isvalid = true;
    for (const prop in validateProperty) {
        for (const chk of validateProperty[prop]) {
            switch (chk) {
                case 'required':
                    isvalid = isvalid && !!Courseobj[prop];
                    break;
                case 'positive':
                    isvalid = isvalid && !(Courseobj[prop] < 0);
            }
        }
    }
    return isvalid;
}
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    describe() {
        console.log(this.title + this.price);
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    Positive,
    Required
], Course.prototype, "price", void 0);
let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEl = document.getElementById("title");
    const priceEl = document.getElementById("price");
    const title = titleEl.value;
    const price = +priceEl.value;
    const Courseobj = new Course(title, price);
    if (!Validate(Courseobj)) {
        alert('Input value are not valid !');
    }
    else {
        console.log(Courseobj);
    }
});
