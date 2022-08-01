function components(template: string, hookid: string) {
    return function <T extends { new (...args: any[]): any }>(constructor: T) {
      return class extends constructor {
        //  name="another"  //overload the property
        constructor(...args: any[]) {
          super();
          let hookidEl = document.getElementById(hookid);
  
          if (hookidEl) {
            let obj = new constructor();
            hookidEl.innerHTML = template;
            hookidEl.querySelector("h1")!.textContent = this.name + this.last;
          }
        }
      };
    };
  }
  
  function methodDeco(target: any, name: string, descriptor: PropertyDescriptor) {
    let originalmtd = descriptor.value;
    console.log(descriptor);
    let desc = {
      // enumerable: false, //optional overload
      // configurable: true, //optional overload
  
      //method overload
      get(){
          return originalmtd.bind(this);
      }
    };
    return desc;
  }
  
  //   @components("<h1></h1>", "main")
  class Person {
    name = "Naushad";
    last = "ansari";
    constructor() {
      console.log("creating Person Object");
    }
  
    @methodDeco
    describe() {
      console.log(this.name + this.last);
    }
  }
  
  let p = new Person();
  
  let btn = document.querySelector("button")!;
  
  btn.addEventListener("click", p.describe);
  