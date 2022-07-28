//we can use type and interface same way the only difference while implementing using object type we can't add anothe extra property
//we can extends type as well as interface
//we can use multiple implemention for both interface and type
//we can use readonly in both type and interface

// type per1 = { readonly name1: string,typefun(phrase:string):void}; //possible
interface per1 { readonly name1: string,typefun(phrase:string):void};
interface per extends per1{
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
    name1:"ansa",
    typefun(phrase: string) {
        console.log(phrase + this.name);
      }
  };
  
  //interface implementation using class  we can define any other method or properties
  class Person implements per,per1 {
    constructor(public name: string,
       public role: number, 
       public col: string[],
       public name1:string    //extra property added
       ) {}
  
    dis(phrase: string) {
      console.log(phrase + this.name);
    }
    typefun(phrase: string) {
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
  p.typefun("hello");

//reference as Interface
  let p1:per = new Person("ansari", 10, [],""); //possible but we cant call p1.ext() as this is not defined in Interface
  p1.dis("Hellow ");
  p1.typefun("hello");
//   p1.ext("hellow"); //not possible

//reference as type alias
  let p2:per1 = new Person("ansari", 10, [],""); 
  p2.typefun("Hellow ");
//   p2.ext("hellow"); //not possible
  
  person3.dis("Hellow");
  