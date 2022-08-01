
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
            hookidEl.querySelector("h1")!.textContent = this.name+this.last;
          }
        }
      };
    };
  }
  
  @components("<h1></h1>", "main")
  class Person {
    name = "Naushad";
    last='ansari';
    constructor() {
      console.log("creating Person Object");
    }
  }
  
  let p =new Person();
  