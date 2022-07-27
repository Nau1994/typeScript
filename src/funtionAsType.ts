enum resultType {
    as_string = "as-string",
    as_number = "as-number",
  }
  function combine(a: number, b: number): number {
    return +a + +b;
  }
  
  let combineVar1: (a: number, b: number) => number;
  
  combineVar1 = combine;
  
  console.warn(combineVar1(10, 20));
  
  let combineVar2 = (a: number, b: number): number => {
    return +a + +b;
  };
  
  console.warn(combineVar2(10, 20));
  