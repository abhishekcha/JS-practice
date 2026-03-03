// promise is a constructor function that creates a new Promise object.
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A Promise is in one of three states:
// 1. Pending: The initial state of a Promise. The operation has not completed yet.
// 2. Fulfilled: The operation completed successfully, and the Promise has a resulting value.
// 3. Rejected: The operation failed, and the Promise has a reason for the failure.
// A Promise is created using the Promise constructor, which takes a function as an argument. The function is called the executor function, and it is executed immediately by the Promise implementation. The executor function takes two arguments: resolve and reject. These are functions that are used to change the state of the Promise from pending to fulfilled or rejected, respectively.
// The resolve function is called when the operation completes successfully, and it takes a single argument, which is the resulting value of the operation. The reject function is called when the operation fails, and it takes a single argument, which is the reason for the failure.
// A Promise can be consumed using the then and catch methods. The then method is used to handle the fulfilled state of the Promise, and it takes a function as an argument, which is called the onFulfilled function. The catch method is used to handle the rejected state of the Promise, and it takes a function as an argument, which is called the onRejected function.
// Example of a Promise:
 /*let firstPromise = new Promise((resolve, reject) =>{
    console.log("abhishek");
    reject(new Error("This is an error message"));
    
 })*/
//................................

// function sayName(){
//     console.log("hacked");
    
// }
// setTimeout(sayName,10000);

//.......................................

/*let promise1=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("Promise is fulfilled");
    }
    else{
        reject(new Error("Promise is rejected"));
    }
});
promise1.then((message)=>{
    console.log("first msg:" +message);
    return "promise fullfilled second message";
}).then((message)=>{
    console.log("second msg:" +message);
    return "promise fullfilled third message";
}).then((message)=>{
    console.log("third msg:" +message);
});*/
//....................................................
//todo async and await
// async and await are used to handle asynchronous operations in a more synchronous way. The async keyword is used to declare an asynchronous function, and the await keyword is used to wait for a Promise to be fulfilled
// await can only be used inside an async function. When the await keyword is used, the async function is paused until the Promise is fulfilled, and then it resumes with the resulting value of the Promise. For example:
// function that returns a Promise that resolves after 2 seconds

// async function getData(){
//      setTimeout(function(){
//         console.log("data received");
//      },3000);
// }
// getData();
//......................................
/*async function getData(){
    let res=await fetch('https://jsonplaceholder.typicode.com/posts');
    let data=await res.json();
    console.log(data);
}
getData();*/
//..........................................
//todo closure
// closure is a function that has access to the variables in its outer scope, even after the outer function has returned. 
// A closure is created when a function is defined inside another function, and the inner function has access to the variables of the outer function. For example:
function outerFunction(){
    let outerVariable="I am from outer function";
    function innerFunction(){
        console.log(outerVariable);
    }
    return innerFunction;
}
let closureFunction=outerFunction();
closureFunction();
//...........................................
