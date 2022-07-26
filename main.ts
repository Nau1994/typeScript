//diference of any and unknown

let data:unknown;
data=10;

let a:number=20;
// a=data;//error
console.warn(typeof data);

if (typeof data ==='number'){
    a=data;//no error  
}

//-----------------------
let data1:any;
data1=10;

let a1:number=20;
console.warn(typeof data1);
a1=data1;//no error