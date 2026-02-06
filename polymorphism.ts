//overloading

function greet(person:string):string;
function greet(person:string,age:number):string;
function greet(person:string,age?:number):string{
    if (age!== undefined){
        return `Hello ${person}, you are ${age} year old`
    }
    return `hello ${person}!`
}
console.log(greet("Poongavi"));
console.log(greet ("Poongavi",30));


function combine(a:number,b:number):number;
function combine(a:string,b:string):string;
function combine(a:any,b:any):any{
    return a+b
}
console.log(combine(2,3));
console.log(combine("abc","xyz"));
console.log(combine("hello",3));




// overriding

class Parent {
    parentpropery:string="parent"

drink(){
    console.log("I drink tea");
}
}
class Child extends Parent{
    childproperty:string="child"
    drink(){
        console.log("I drink coffee");
        
    }
}
let parent1 = new Parent()
console.log(parent1);
parent1.drink()
let child1= new Child()
console.log(child1);
child1.drink()

