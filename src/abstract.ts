//abstract class could have abstract method(without implementation)+intance method(with implementation)
//abstract class could have constructor so that child class can initialized the super class
//could not create object of abstract class but we can use asbrtact class as reference of child class object
abstract class Department{
    private name:string='';
    static readonly year=2022;
    constructor(public id:number,name:string){
        this.name=name;
    }

    abstract describe(this:Department):void
    ;

    static createEmployee(name:string){
        return name;
    }

}

class Itdepartment extends Department{
    constructor(id:number,public admin:string[]){
        super(id,"ItDepartment");
    }
    describe(this:Itdepartment):void
    {
        console.log(`Department with ID ${this.id}:${this.admin}`);
    }
}

class Accountdeparment extends Department{
    private last:string;
    constructor(id:number,public reports:string[]){
        super(id,"AccontDepartment");
        this.last=this.reports[0];
    }

    get recentReport(){
        if(!this.last){
            throw new Error('No report found!')
        }
        else{
            return this.last;
        }
    }

    set recentReport(value:string){
        if(!value){
            throw new Error("Report can't inserted!")
        }
        else{
            // this.last=value;
            this.addReport(value);
        }
    }

    addReport(this:Accountdeparment,value:string){
        this.reports.push(value);
        this.last=value;
    }

     describe(this:Accountdeparment):void
    {
        console.log(`Department with ID ${this.id}:${this.reports}`);
    }
}

let acc1=new Accountdeparment(20,['a','b']);
acc1.describe();
acc1.addReport("r1");  //its  possible as addReport() does  belong to Accountdeparment

let acc:Department=new Accountdeparment(20,['a','b']); // Department is abstract but this way is possible
// acc.addReport("r1"); //but its not possible as addReport() does not belong to Department
