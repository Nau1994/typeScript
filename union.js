"use strict";
// when we have no idea about datatype 
// recomnded to use union
function combine(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.warn(combine("naushad", "ansari"));
console.warn(combine(10, 20));
