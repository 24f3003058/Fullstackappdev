//TypeScript
function greet(name:string){
  console.log("Hello "+name);
}
 
function sum(a: number,b: number): number{
  return a+b;
}
//inferred type
function isLegal(age : number): Boolean{
  if(age > 18){
    return true;
  }else{
    return false;
  }
}

//passing one function as an argument in other
// : (arguments) => return_type
function runsAfter1s(fn:()=>void){
  setTimeout(fn,1000)
}

runsAfter1s(function(){
  console.log("Hello World!");
})

function runsAfter2s(fn:()=>String){
  setTimeout(fn,2000);
}

runsAfter2s(function(){
  return "Hello World 2";
})

greet("Yash");
sum(100,100);
isLegal(16);

interface User{
  firstName:string,
  lastname:string,
  age:number
};

function islegal(user:User){
  if(user.age>18){
    return true;
  }else{
    return false;
  }
}

function greet1(user:User){
  console.log("Hi "+user.firstName);
}

islegal({
  firstName:"sneha",
  lastname:"Sharma",
  age:25
})
