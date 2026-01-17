// /*
//     Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
// */
// const { resolve } = require("dns")
function wait(n){
    return  new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },1000*n);
    } ) 
}
wait(5);
