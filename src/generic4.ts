//extending to generics to let developer know that T could have only  type that have length property
interface lengthy {
    length:number;
  }
  
  function getCountDescription<T extends lengthy>(element:T){
    let text='Got No element';
    if(element.length===1){
      text='Got 1 element';
    }
    if(element.length >1){
      text=`Got ${element.length} elements`;
    }
  
    return [element,text]
  
  }
  
  console.log(getCountDescription("it"));
  console.log(getCountDescription([]));
  // console.log(getCountDescription({name:'na'})); //error bcz object does't have length property
  