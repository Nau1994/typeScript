//type guard in  type
type combine = string|number;
  
function add(a:combine,b:combine){
  if(typeof a==='number' && typeof b==='number'){  //typeguard
      return a+b;
  }
  
}

//type guard in object type
interface employe  {
  name: string;
  role: string[];
};

interface admin  {
  name: string;
  startdate: Date;
};

type unknowntype =employe|admin;

function disp(a:unknowntype){
  console.log(a.name);

  if('role' in a){                             //typeguard
  console.log(a.role);}

  if('startdate' in a){                       //typeguard
  console.log(a.startdate);}
}

interface superemp extends admin,employe{};
let emp:superemp={
  name:'Leela',
  role:['admin'],
  startdate:new Date()
}
disp(emp);

//type guard in class
class car{
  drive(){
      console.log("car driving");
  }
  wait(){
      console.log("car waiting...."); 
  }
}

class truck{
  drive(){
      console.log("truck driving");
  }

  loadcargo(){
      console.log("cargo loading...."); 
  }
}

type veh=car|truck;

function vehical(a:veh){
  a.drive();
  if (a instanceof car){
      a.wait();
  }
  if (a instanceof truck){
      a.loadcargo();
  }
}

let c=new car();
let t=new truck();
vehical(c);
vehical(t);
//type guard in class
interface Bird{
  type:'Bird',
  flyingSpeed:number
}

interface Horse{
  type:'Horse',
  runningSpeed:number
}
interface Snake{
  type:'Snake',
  crawlingSpeed:number
}

type AnimalSpeed=Bird|Horse|Snake;

function speedcheck(animal:AnimalSpeed){
  let speed=0;
  switch (animal.type) {
      case 'Bird':
          speed=animal.flyingSpeed;
          break;
      case 'Horse':
          speed=animal.runningSpeed;
          break;
      case 'Snake':
          speed=animal.crawlingSpeed;
          break;
  }

  console.log("speed of "+animal.type+" is :"+speed);
}

let bird:Bird={
  flyingSpeed:100,
  type:'Bird'
}
let snak:Snake={
  crawlingSpeed:10,
  type:'Snake'
}
let horse:Horse={
  runningSpeed:50,
  type:'Horse'
}

speedcheck(bird);
speedcheck(horse);
speedcheck(snak);