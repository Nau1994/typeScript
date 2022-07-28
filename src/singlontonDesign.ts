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
    private static instance:Accountdeparment;
    private constructor(id:number,public reports:string[]){
        super(id,"AccontDepartment");
        this.last=this.reports[0];
    }

    static getInstance(){
        if(Accountdeparment.instance){
            return Accountdeparment.instance;
        }else{
            Accountdeparment.instance=new Accountdeparment(10,[]);
            return Accountdeparment.instance;
        }
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

let acc1=Accountdeparment.getInstance();
let acc2=Accountdeparment.getInstance();
if (acc1===acc2){
    console.log(acc1);
}