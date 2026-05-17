type User={
  firstName:string;
  lastName:string;
  age: number;
}


//union
type StringOrNumber= string | number 
function printID(id: StringOrNumber){
  console.log(id);
}

Array  in ts
function FindMAx(arr : number[]){
  let max=0 ;
  for(let i=0 ; i < arr.length ; i++){
    if(arr[i] > max){
      max=arr[i]
    }
  }
  return max;
}
console.log(FindMAx([23,45,67]));

//enum
enum Direction{
  Up,
  Down,
  Left,
  Right
}
function Dosomething(KeyPressed :Direction){
  if(KeyPressed==Direction.Up){
    //do something
  }
  if(KeyPressed==Direction.Down){
    //do something
  }
}

Dosomething(Direction.Down);
