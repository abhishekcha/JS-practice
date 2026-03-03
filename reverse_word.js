

const str="react is a library";
function reverse(str){
    const arr=str.split(" ");
    arr.map((word,index)=>{
        arr[index]=word.split("").reverse().join("");
    })
    return arr.join(" ");
}
const words=reverse(str);
console.log(words);