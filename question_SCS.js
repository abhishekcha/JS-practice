//todo question-1
// let user={
//     name:"harsh",
//     email:"abhi@gmail.com",
//     login:function(){
//         console.log("logged in");
//     }
// };

// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email; 
//     }
//     loggedIn(){
//         console.log("logged in");
//     }
// }
// let user1=new User("abhi","abhi@gmail.com");
// console.log(user1);
// console.log(user1.loggedIn);

// let user2=new User("anu","anu@gmail.com");
// console.log(user2);
//todo question-2
class Car{
    constructor(brand,speed){
        this.brand=brand;
        this.speed=speed;
    } 
    drive(){
        console.log(this.brand,"--",this.speed);
        
    }
}
let d1=new Car("bmw",180);
let d2=new Car("safari",220);
d1.drive();
d2.drive();

