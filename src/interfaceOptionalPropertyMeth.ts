interface per {
    name: string;
    role: number;
    col?: string[];                   //optinal property
    dis?(phrase: string): void;       //optuinal method
  }
  
  class Person implements per {
    constructor(public name: string, public role: number) {}
    
  }
  