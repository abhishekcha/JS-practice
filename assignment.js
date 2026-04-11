// In JavaScript, variable declarations using `var` are hoisted to  

//const { StrictMode } = require("react");

// let a = 30;
// function foo() {
//   console.log(a);
// }
// var foo;
// foo();
// function a() {
//   console.log("A");
// }

// var a;
// a();
//console.log(null==0);
//.............................................
/*const obj = {
  name: "JS",
  show() {
    return ()=> 
      console.log(this.name);
    }
  }

obj.show()();// Output: js */
//''''''''''''''''''''''''''''''''''''''''''''''''''
/*const obj = {
  name: "JS",
  arrow: () => {
    console.log(this.name);
  }
};

obj.arrow();// Output: undefined*/
//'''''''''''''''''''''''''''''''''''''''''''''''''""
/*function test() {
  console.log(this);
}

test.call(null);// Output: null
test.call(undefined);// Output: undefined
// how to defined strict mode*/
//''''''''''''''''''''''''''''''''

/*const sum = [1, 2, 3].reduce((acc, cur) => {
  acc += cur;
}, 0);

console.log(sum);// output is undefined */
//''''''''''''''''''''''''''''''''''''''''''''''''''
//todo add method via prototype in javascript
function User(name) {
    this.name = name;
}
User.prototype.greet = function() {
    console.log(`Hello, ${this.name}!`);
}
const user= new User("Alice");
user.greet();// Output: Hello, Alice!

//todo create class with inheritance in javascript and Use static & private fields
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {

        console.log(`${this.name} makes a sound.`);

    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}
const dog = new Dog("Buddy");
const animal = new Animal("Generic Animal");
animal.speak();// Output: Generic Animal makes a sound.
dog.speak();// Output: Buddy barks.

//todo Use static & private fields
class Counter {
    static count = 0; 
    #privateCount = 0;
    increment() {
        Counter.count++;
        this.#privateCount++;
    }
    getPrivateCount() {
        return this.#privateCount;
    }
}
const counter1 = new Counter();
counter1.increment();
counter1.increment();
console.log(Counter.count); 
console.log(counter1.getPrivateCount());



