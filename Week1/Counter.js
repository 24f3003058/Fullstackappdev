function timeCounter(){
  let counter=0;
  setInterval( function(){
    counter++;
    console.log(counter);
  },1000)
}

timeCounter();


