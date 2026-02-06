// access modifiers
// public
class Example{
    public newEx:string="Good Morning"
}
class Examplechild extends Example{
    constructor(){
        super()
    }
}
    let exp1= new Example()
    console.log(exp1);
    console.log(exp1.newEx)
    let expchild= new Examplechild()
    console.log(expchild);


// protected
class Marker{
    private price:number
    protected brand:string
    constructor(price:number,brand:string){
        this.price=price
        this.brand=brand
    }
}
class Childmarker extends Marker{
    constructor(price:number,brand:string){
        super(price,brand)
    }
    accessBrand(){
        this.brand="camlin"
    }
}
let marker1=new Marker(100,"camlin")
console.log(marker1);


//getters and setters

class Person{
    private age:number;
    constructor(age:number){
        this.age=age
    }
    get getage(){
        return `My age is ${this.age}`
    }
    set setage(age:number){
        if(age>0 && age<100){
            this.age=age
        }
    }

}
let person1= new Person(30)
console.log(person1);
console.log((person1.getage));
console.log(person1.setage=50);





    
    
