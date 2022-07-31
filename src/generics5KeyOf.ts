//extending with key to tell developer about property of object

function getKeyValue<T extends object,U extends keyof T>(obj:T,key:U){
    return obj[key];
  }
  
  console.log( getKeyValue({name:'naush'},'name'));