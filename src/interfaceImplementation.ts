// type per = { name: string; role: number; col: string[] ,dis(phrase:string):void};
interface per {
    name: string;
    role: number;
    col: string[];
    dis(phrase: string): void;
  }
  
  //interface implementation using Object type we can't define any other method or properties
  let person3: per = {
    name: "naushad",
    role: 20,
    col: ["a", "b"],
    dis(phrase: string) {
      console.log(phrase + this.name);
    },
  };
  
  //interface implementation using class  we can define any other method or properties
  class Person implements per {
    constructor(public name: string,
       public role: number, 
       public col: string[],
       public n:string    //extra property added
       ) {}
  
    dis(phrase: string) {
      console.log(phrase + this.name);
    }
  
    //extra method added
    ext(phrase: string) {
      console.log(phrase + this.name);
    }
  }
  
  let p = new Person("ansari", 10, [],"");
  p.dis("Hellow ");
  person3.dis("Hellow");
  