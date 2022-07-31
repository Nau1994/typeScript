class DataStorage<T extends string|number|boolean>{
    private data:Array<T >=[];
  
    addItem(item:T){
      this.data.push(item);
    }
  
    rmoveItem(item:T){
      this.data.splice(this.data.indexOf(item),1);
    }
  
    getItem(){
      return [...this.data];
    }
  }
  
  let stringData=new DataStorage<string>();
  stringData.addItem("name");
  stringData.addItem("age");
  stringData.rmoveItem("name");
  console.log(stringData.getItem());
  
  let numberDta=new DataStorage<number>();
  numberDta.addItem(1);
  numberDta.addItem(2);
  numberDta.rmoveItem(1);
  console.log(numberDta.getItem());
  
  let booleandata=new DataStorage<boolean>();
  booleandata.addItem(true);
  booleandata.addItem(false);
  booleandata.rmoveItem(true);
  console.log(booleandata.getItem());
  
  // let ObjectDta=new DataStorage<object>();
  // let item={name:'naushad'};
  // ObjectDta.addItem(item);
  // ObjectDta.addItem({name:'ansari'});
  // ObjectDta.rmoveItem(item);
  // console.log(ObjectDta.getItem());
  
  