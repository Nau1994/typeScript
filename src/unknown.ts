//diference of any and unknown
//Anything is assignable to unknown, but unknown isn't assignable to anything but itself

let data:unknown;
data=10;

let a:number=20;
a=data;//error
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
//-----------------------------------
let vAny: any = 10;          // We can assign anything to any
let vUnknown: unknown =  10; // We can assign anything to unknown just like any 


let s1: string = vAny;     // Any is assignable to anything 
let s2: string = vUnknown; // Invalid; we can't assign vUnknown to any other type (without an explicit assertion)

vAny.method();     // Ok; anything goes with any
vUnknown.method(vUnknown); // Not ok; we don't know anything about this variable