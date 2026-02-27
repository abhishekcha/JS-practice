// todo Error Handling
// Error handling is the process of handling errors in a program.
// try catch and finally are used to handle errors in a program.
// try block is used to write the code that may throw an error.
// catch block is used to handle the error thrown by the try block.
// finally block is used to execute the code that must be executed regardless of whether an error is thrown or not.
// types of errors
// syntax error
// reference error
// type error
// throw statement is used to throw an error manually.
// throw new Error("This is an error message");

// try {
//   console.log("try block");
//   console.log(x)
// } catch (error) {
//   console.log("inside catch block", error);
// }
// finally {
//     console.log("i will run everytime"); 
// }

// todo throw statement
// throw statement is used to throw an error manually.
try{
    console.log(x);
    
}catch{
throw new Error("This is an error message");
}