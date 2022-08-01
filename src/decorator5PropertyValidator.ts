interface validatorConfig {
    [course: string]: {
      [property: string]: string[];
    };
  
    // course:{
    //     title:['required'],
    //     price:['required']
    // }
  }
  
  const validatorObj: validatorConfig = {};
  function Required(target: any, name: string) {
    //  console.log(target.constructor.name);
    
    let dec = ["required"];
    if (validatorObj[target.constructor.name]) {
      
      if (validatorObj[target.constructor.name][name]) {
        dec = validatorObj[target.constructor.name][name];
        dec.push("required");
      }
    }
    
  
    validatorObj[target.constructor.name] = {
      ...validatorObj[target.constructor.name],
      [name]: dec,
    };
  }
  
  function Positive(target: any, name: string) {
    //  console.log(target.constructor.name);
  
    let dec = ["positive"];
    if (validatorObj[target.constructor.name]) {
      
      if (validatorObj[target.constructor.name][name]) {
        dec = validatorObj[target.constructor.name][name];
        dec.push("positive");
      }
    }
    validatorObj[target.constructor.name] = {
      ...validatorObj[target.constructor.name],
      [name]: dec,
    };
  }
  
  
  function Validate(Courseobj:any):boolean {
      // console.log(Courseobj);
      // console.log(Courseobj.constructor.name);
      let validateProperty=validatorObj[Courseobj.constructor.name];
      let isvalid:boolean=true;
      for (const prop in validateProperty){
          for (const chk of validateProperty[prop]){
              switch (chk){
                  case 'required':
                      isvalid=isvalid && !!Courseobj[prop];
                      break;
                  case 'positive':
                      isvalid=isvalid && !(Courseobj[prop]<0);
                  
              }
          }
      }
      return isvalid;
  }
  
  class Course {
    @Required
    title: string;
  
    @Positive
    @Required
    price: number;
  
    constructor(title: string, price: number) {
      this.title = title;
      this.price = price;
    }
  
    describe() {
      console.log(this.title + this.price);
    }
  }
  
  let form = document.querySelector("form")!;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEl = document.getElementById("title") as HTMLInputElement;
    const priceEl = document.getElementById("price") as HTMLInputElement;
  
    const title = titleEl.value;
    const price = +priceEl.value;
  
    const Courseobj = new Course(title, price);
    if(!Validate(Courseobj) ){
      alert('Input value are not valid !')
    }else{
      console.log(Courseobj);
    }
  });
  