type addfun=(a:number,b:number)=>number

interface addfun2 {
    (a:number,b:number):number
}

let fn1:addfun;
fn1=(a:number,b:number)=>{return a+b;};
console.log(fn1(20,40));

let fn2:addfun2;
fn2=(a:number,b:number)=>{return a+b;};
console.log(fn2(22,40));
