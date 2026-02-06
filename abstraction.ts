abstract class Animal{
    animalname:string="tiger"
    abstract makesound():void
    abstract move():void
}
class Cat extends Animal{
    makesound():void{
        console.log("meoww...");
    }
    move():void{
        console.log("rolling everywhere");
    }
}
let cat1= new Cat()
console.log(cat1);
cat1.move()
cat1.makesound()
