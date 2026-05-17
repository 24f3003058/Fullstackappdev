//generics
function ReturnFirstE<T>(arr: T): T{
  return arr[0];
}
let e1=ReturnFirstE<string>(["Neha","Yash"]);
console.log(e1.toUpperCase());
ReturnFirstE<number>([12,34,56]);
ReturnFirstE<string | number>(["Neha",23,43,"Yash]);
