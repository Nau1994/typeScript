"use strict";
//Apply value rather than type to any variable
//but variable can hold only those two value only
// when we have no idea about datatype
// recomnded to use union
function combine(a, b, type) {
    if (type == "as-number") {
        return +a + +b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.warn(combine("naushad", "Ansari", "as-string"));
console.warn(combine(10, 20, "as-number"));
