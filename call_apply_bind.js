//todo call_apply_bind->
// ek function me this ki value window hoti hai agr aap 
// chate ho this ki value window na ho to hum use karte hai call apply and bind.

//bind() — returns new function (does NOT call immediately)
// function greet(city, country) {
//   console.log(`Hello, I am ${this.name} from ${city}, ${country}`);
// }

// const person = {
//   name: "Abhishek"
// };

// const boundFunction = greet.bind(person, "Varanasi", "India");
// boundFunction();

// call() — invokes function immediately (args separately)
// function greet(city, country) {
//   console.log(`Hello, I am ${this.name} from ${city}, ${country}`);
// }

// const person = {
//   name: "Abhishek"
// };

// greet.call(person, "Varanasi", "India");

//apply() — invokes function immediately (args as array)
function greet(city, country) {
  console.log(`Hello, I am ${this.name} from ${city}, ${country}`);
}

const person = {
  name: "Abhishek"
};

greet.apply(person, ["Varanasi", "India"]);