function mult(a:number){
    return a*a
}
let res = mult(20)
console.log(res);


function nothing (msg:string):void{
    console.log(msg);
}
let res1 = nothing("good morning''")
console.log(res1);



function data(a:any, b:any):any{
    return (a+b)
}
console.log(data("10",20));



function data1(a:unknown):unknown
{
    if(typeof a==="number"){
        console.log("a is a number");
    }
    throw new Error ("a is not a number");
}
let res2 = data1 ('10')
console.log(res2)
