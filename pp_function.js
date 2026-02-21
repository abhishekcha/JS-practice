// javaScript code execute in a single thread, it means that only one command can be executed at a time.
// function add(){
//     let a=10;
//     let b=20;
//     let ans = a+b;
//     console.log("-->",ans);
    
// }
// console.log("start");
// add();
// console.log("end");
// ...............................................
// function getNumber(){
//     const str=Window.prompt("Enter a number");
//     const num=Number(str);
//     if(Number.isNaN(num)){
//        console.log("not a number");
       
//     }
//     else{
//         console.log(num);
        
//     }
//     //return num;
// }
// getNumber();
// iif->
(function(a,b){
    console.log(a+b);
    
})(10,20);
