interface course{
    title:string,
    descriptio:string,
    addedDate:Date
  }
  
  function addCourse(title:string,descriptio:string,addCourse:Date):course{
    let data:Partial<course>={};
  
    data.addedDate=addCourse;
  
    data.descriptio=descriptio;
  
    data.title=title;
  
    return <course>data;
  
  }