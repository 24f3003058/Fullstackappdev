// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks. -->  

const fs=require('fs');
let p=new Promise(function(resolve){
  fs.writeFile('a.txt',"Thanking you",'utf-8',function(err){
    resolve("File written successfully");
    fs.readFile('a.txt','utf-8',function(err,data){
    console.log(data);
    })
  }); 
});

async function main(){
  let data=await p;
  console.log(data);
}
main();
