class Department{
    private name:string='';
    constructor(public id:number,name:string){
        this.name=name;
    }

    describe(this:Department){
        console.log(`Department with ID ${this.id}:${this.name}`);
    }
}

class Itdepartment extends Department{
    constructor(id:number,public admin:string[]){
        super(id,"ItDepartment");
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
}

let acc=new Accountdeparment(20,['r1','r2']);
console.log(acc);
acc.recentReport='r3';
let lastrep=acc.recentReport;

console.log(lastrep)
acc.describe();