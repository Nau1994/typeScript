// Define type like avariable and reuse it
// type alias with variable
// type alias with function params

type varType=string | number|undefined;

function combine(
    a:varType ,
    b:varType,
    type: "as-string" | "as-number"
  ) {
    if (type == "as-number") {
      return +a + +b;
    } else {
      return a.toString() + b.toString();
    }
  }
  
  console.warn(combine("naushad", "Ansari", "as-string"));
  console.warn(combine(10, 20, "as-number"));