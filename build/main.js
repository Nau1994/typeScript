"use strict";
let names = [];
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolve string data');
    }, 2000);
});
promise.then((data) => {
    data.split('');
});
