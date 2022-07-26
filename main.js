//diference of any and unknown
var data;
data = 10;
var a = 20;
// a=data;//error
console.warn(typeof data);
if (typeof data === 'number') {
    a = data; //no error  
}
//-----------------------
var data1;
data1 = 10;
var a1 = 20;
console.warn(typeof data1);
a1 = data1; //no error
