type employe = {
    name: string;
    role: string[];
  };
  
  type admin = {
    name: string;
    startdate: Date;
  };
  
  type superEmploye = employe & admin; //name:string,role:string[],startdate:Date
  
  interface employeInterfacte {
    name: string;
    role: string[];
  }
  
  interface adminInterfacte {
    name: string;
    startdate: Date;
  }
  
  interface superEmployeInterfacte extends employeInterfacte, adminInterfacte {} //name:string,role:string[],startdate:Date
  
  
  type employeNonObject = string|string[];
  type adminNonObject = string|Date;
  type superEmployeNonObject=employeNonObject & adminNonObject; // string