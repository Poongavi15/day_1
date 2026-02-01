let age: number=17;
let weight: number =55;
if(age >=18){
    if(weight >= 55){
        console.log("can donate blood")
    }
    else{
        console.log("cannot donate blood due to under weight")
    }
}
else{
    console.log("cannot denote blood due to under age");
    
}
let age1 : number = 10;
let height : number = 120;
if(age1 <= 9){
    console.log("hall ticket permitted");
}
else if(height <= 120){
    console.log("hall ticket permitted");
}
else{
    console.log("hall ticket not permitted");
}


if(age1 <= 3 || height <= 70){
    console.log("hall ticket permitted...");
}
else{
    console.log("hall ticket not permitted...");
}