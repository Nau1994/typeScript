// function overloading can also tells the exact return type

type combinetype=string|number;
function combine(a:string,b:string):string;
function combine(a:number,b:number):number;
function combine(a:string,b:number):string;
function combine(a:number,b:string):string;
function combine(a:combinetype,b:combinetype):combinetype{

    if(typeof a==='number' && typeof b==='number'){
        return a+b;
    }
    else{
        
        return a.toString()+b.toString();
    }

}

let a=combine('1','2'); //string
a.split("")
let a1=combine(1,2); //number