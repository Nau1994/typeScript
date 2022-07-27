class createUser{
    account:string="";
    constructor(account:string){
        this.account=account;
        console.log(this.account);
    }
}

class User extends createUser{
     name:string="";
    constructor(name:string,account:string){
        
        super(account);
        this.name=name;
        console.log(this.name);
    }  
}

let u1=new User("naushad","humana");

