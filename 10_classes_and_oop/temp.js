class User {
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    set password(value){
        this._password = `${value} enc`
    }
    get password(){
        return `${this._password} getter`
    }        
}
const userOne = new User("S","I","M")
console.log(userOne.password);
