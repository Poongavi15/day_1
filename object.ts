let user:{
    username:string;
    age:number;
    city:string;
    marks:number[]
}={
    username:"Poongavi",
    age:30,
    city:"chennai",
    marks:[10,20,30]
}
console.log(user)
console.log(user.city)
console.log(user["age"]);



let classroom:{
    clssname:string;
    students:{
        name:string;
        id:number;
        marks:number[]
    }[]
}={
    clssname:"typescript",
    students:[
        {name:"xyz",id:10,marks:[10,20,30]},
        {name:"abc",id:11,marks:[100,200,300]}
    ]
}
console.log(classroom)
console.log(classroom.clssname);
console.log(classroom["students"]);

