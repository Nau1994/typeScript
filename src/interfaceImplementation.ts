type per1 = { name: string; role: number; col: string[] ,dis(phrase:string):void};
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
  
  //reference as implement class
  let p = new Person("ansari", 10, [],"");
  p.dis("Hellow ");
  p.ext("hellow");

//reference as Interface
  let p1:per = new Person("ansari", 10, [],""); //possible but we cant call p1.ext() as this is not defined in Interface
  p1.dis("Hellow ");
//   p1.ext("hellow"); //not possible

//reference as type alias
  let p2:per1 = new Person("ansari", 10, [],""); 
  p2.dis("Hellow ");
//   p2.ext("hellow"); //not possible
  
  person3.dis("Hellow");
  