class BankAccount{
    private username:string
    salary:number
    constructor(username:string,salary:number){
        this.username=username
        this.salary=salary
    }
    get getBankAccount(){
        return `Username is $(this.username)`
    }
    set setBankaccount(username:string){
        this.username=username
    }

}
let account1=new BankAccount("poongavi",1000)
console.log(account1);
console.log(account1.getBankAccount);
account1.setBankaccount= "abc"
console.log(account1)