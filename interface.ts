interface User{
    name:string,
    height:number,
    weight:number
}
let user1:User={
    name:"Poongavi",
    height:150,
    weight:60,
    id:101
}
interface User{
    id?:number
}
interface Employee extends User{
    empid:number,
    company:string
}
let emp:Employee={
    empid:1001,
    company:"xyz",
    name:"Poongavi",
    height:155,
    weight:55
}
console.log(user1)
console.log(emp)