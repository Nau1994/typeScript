//if userData coult be NULL or undefined then nullCoales is required

let userData=undefined;

let storedData=userData ?? 'DEFAULT';

console.log(storedData);