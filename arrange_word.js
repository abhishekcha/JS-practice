let str="gfg is a comp science learning platform";
let arr=str.split(" ");

arr.sort(function a(x,y){
    if(x.length<y.length){
        return -1;
    }
    else if(x.length>y.length){
        return 1;
    }
    else{
        return 0;
    }
});
str=arr.join(" ");
console.log(str);
