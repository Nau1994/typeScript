
// function loggerClass(constructor:Function){
//   console.log('Logged Person Class');
  
// }

function loggerClass(){
    return function (constructor:Function){
      console.log('Logged Person Class');
    };
    
  } 
  
  function components(template:string,hookid:string){
    return function(constructor:any){
      let hookidEl=document.getElementById(hookid);
    // hookidEl?.innerHTML!=template;
    if(hookidEl){
      let obj= new constructor();
      hookidEl.innerHTML=template;
      hookidEl.querySelector('h1')!.textContent=obj.name;
    }
    };
  }
  
  
  @components('<h1></h1>','main')
  class Person{
    name='Naushad';
    constructor(){
      console.log("creating Person Object");
    }
  }
  
  // let p =new Person();
  