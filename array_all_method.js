//slice
// let arr=[1,2,3,4,5,"anu"];
// let ans=arr.slice(0,3);//123
// console.log(ans);
//slice return array
//splice
// let arr1=[1,2,3,4,5,"anu"];
// let ans1=arr1.splice(0,3);//123
// console.log(ans1);//123
// console.log(arr1);//45anu
//splice return array
//...................................
// map
//let arr2=[1,2,3,4,5];
//map return array.
//map is used to perform some operation on each element of the array and return a new array.
// let x=arr2.map((ele)=>{
//     return ele*2;
// })
// console.log(x);
//filter
//filter return new array.
//filter is used to filter the elements of the array based on some condition and return a new array.
//.....................................
// console.log("...........................................");

// let arr3=[1,2,3,4,5,6];
// let y=arr3.filter((ele)=>{
//     return ele%2==0;
// })
// console.log(y);
//..............................

// let arr4=[1,2,3,'anu','shruti','priya'];
// let z=arr4.filter((ele)=>{
//     return typeof ele=="string";
// })
// console.log(z);
//.............................
//reduce
//reduce return a single value.
// let arr1=[1,2,3,4,5];
// console.log(arr1.indexOf(4));
//find return the first element that satisfies the condition.
//find return undefined if no element satisfies the condition.

// let x=arr1.find((ele)=>{
//     return ele==2;
// })
// console.log(x);


// let ans =arr1.reduce((acc,ele)=>{
//     return acc+ele;
// },0);
// console.log(ans);
//.......................................................

//todo forEach
// forEach return undefined.
//forEach is used to perform some operation on each element of the array and return undefined.
// let arr5=[1,2,3,4,5];
// arr5.forEach((val,index)=>{
//     console.log(val,index);
// })
// todo forIn
// forIn return undefined.
// forIn is used to iterate over the properties of an object and return undefined.

// todo arry with function
// let arr=[10,20,30,40,,50,60];
// function printArr(arr){
//     let sum=0;
//     arr.forEach((ele)=>{
//         sum=sum+ele;
//     })
//     return sum;
// }
// let ts=printArr(arr);
// console.log(ts);
//todo hoisting
//hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations. For example:
// class level hoisting is not possible in JavaScript. It means that you cannot use a class before it is declared in the code. For example:
// hoisting is not possible for let and const variables. It means that you cannot use let and const variables before they are declared in the code. For example:
// console.log(x); 
// let x=10;
// console.log(y);
// const y=20;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// function first class function 
// function can be treated as a first class citizen in JavaScript. It means that functions can be assigned to variables, passed as arguments to other functions, and returned from other functions. For example:
// function add(a,b){
//     return a+b;
// }
// let sum=add(10,20);
// console.log(sum);
