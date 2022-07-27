class User{
    // name:string="";
    // constructor(){
    //     this.name="naushad";
    //     console.log(this.name+" constructor called ");
    // }

   //short hands
    constructor(public name){
        
        console.log(this.name+" constructor called ");
    }
}

let u1=new User("naushad");
let u2=new User("ansari");