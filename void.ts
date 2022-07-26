// void and undefined return type
//by default void if nothing returning

function fun():undefined {
    console.warn("print");
    // return undefined;
  }



  function fun3():unknown {
    console.warn("print");
    let a:number=20;
    // return a;
   
  }

 

function fun2():void {
    console.warn("print");
   
  }

  function fun5():any {
    console.warn("print");
    let a:number=20;
    // return a;
   
  }

  

function fun6():never {
    throw {};
   
  }

console.warn(fun2());