// Define type like avariable and reuse it
// type alias with variable
// type alias with function params
function combine(a, b, type) {
    if (type == "as-number") {
        return +a + +b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.warn(combine("Naushad", "Ansari", "as-string"));
console.warn(combine(10, 20, "as-number"));
