class Vehicle{
    make:string;
    model:string;
    constructor(make:string, model:string){
        this.make=make;
        this.model=model;
    } displayVehicledetails():void{
        console.log(`Vehicle:${this.make}${this.model}`);
    }
}
class Car extends Vehicle{
    price:number;
    constructor(price:number, make:string, model:string){
        super(make, model)
        this.price=price
    }
    displayCardetails():void{
        this.displayVehicledetails()
        console.log(`price:${this.price}`);
    }
}

class SportsCar extends Car {
    maxspeed:number;
    constructor(maxspeed:number, make:string, model:string, price:number){
        super(price, make, model)
        this.maxspeed= maxspeed
    }
    displaySportsCardetails():void{
        this.displayCardetails();
        console.log(`maxspeed:${this.maxspeed}`);
        
    }
}
let mysportscar= new SportsCar(150,"India","Maruti",2000)
console.log(mysportscar);
mysportscar.displaySportsCardetails()