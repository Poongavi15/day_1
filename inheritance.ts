 class Person{
    fname:string;
    lname:string;
    constructor(fname:string,lname:string){
        this.fname= fname;
        this.lname=lname;
    }
    getfullname():void{
        console.log(`${this.fname}-${this.lname}`);
     }
     printHello(){
        console.log("hello");
        
     }
    }
     let person1= new Person("xyz","abc")
     console.log(person1);
     person1.getfullname()
     person1.printHello()



    let person2= new Person("qwe","rty")
     console.log(person2);
     person2.getfullname()
     person2.printHello()


     class Employee extends Person{
        age: number;
        gender: string;
        constructor(age: number, gender: string, fname:string, lname:string){
            super(fname,lname)
            this.age=age;
            this.gender= gender;

        }
     }
     let emp1= new Employee(20,"female","asd","fgh")
     console.log(emp1);
     emp1.getfullname
     