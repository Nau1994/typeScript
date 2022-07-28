// type per = { name: string; role: number; col: string[] ,dis(phrase:string):void};
interface per {
  name: string;
  role: number;
  col: string[];
  dis(phrase:string):void
}

//interface implementation using Object type
let person3: per = {
  name: "naushad",
  role: 20,
  col: ["a", "b"],
  dis(phrase:string){console.log(phrase+this.name)},
};

person3.dis("Hellow");
