const arr= [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
let res=arr.filter((num,ind,array)=>{
    return num!==0;
});
res=res.concat(
arr.filter((val,ind,arr1)=>{
    return val===0;
}));
console.log(res);
