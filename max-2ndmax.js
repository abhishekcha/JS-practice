const arr=[2,5,8,4,9,7];
let max_one=Math.max(...arr);
let ans=arr.filter(val=>val!=max_one);
let max_two=Math.max(...ans);
console.log(max_one,max_two);


