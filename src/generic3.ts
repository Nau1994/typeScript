//extending to generics to let developer know that T,U could have only object type
function merge<T extends object,U extends object>(obj1:T,obj2:U){
    return Object.assign(obj1,obj2);
   }
   
  //  let data=merge({name:'naushad'},28); //error
   let data=merge({name:'naushad'},{age:28});
   
   console.log(data);