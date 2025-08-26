const arr=[20,30,40,50,60];
let flag=arr.every((val,i,arr)=>{
    return i===0 || val>=arr[i-1]
})
if(flag){
    console.log("Sorted");
}
else{
    console.log("Not Sorted");
}