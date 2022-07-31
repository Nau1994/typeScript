function merge<T,U>(obj1:T,obj2:U){
    return Object.assign(obj1,obj2);
   }
   
   let data=merge<{name:string,project:string},{age:number}>({name:'naushad',project:"humana"},{age:28});
   
   console.log(data);