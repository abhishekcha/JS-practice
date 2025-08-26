//Input: arr[] = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5], x = 4, y = 5
//Output: 4
const arr=[1,1,2,2,3,3,4,4,4,4,5];
const x=4;
const y=5;
let obj= {};
arr.map((ele,i,arr)=>{
    if(obj[ele]){
        obj[ele]++;
    }
    else{
        obj[ele]=1
    }
    return obj;
});
// const arr1=Object.values(obj);
// console.log(arr1);

if(obj[x]>obj[y]){
    console.log(x);
}
else{
    console.log(y);
}

