"use strict";
// void and undefined return type
//by default void if nothing returning
function fun() {
    console.warn("print");
    // return undefined;
}
function fun3() {
    console.warn("print");
    let a = 20;
    // return a;
}
function fun2() {
    console.warn("print");
}
function fun5() {
    console.warn("print");
    let a = 20;
    // return a;
}
function fun6() {
    throw {};
}
console.warn(fun2());
