// debouncing........
function debounce(fn,delay){
    let timer=4000;
    return function(){
        clearTimeout(timer);
        timer=setTimeout(()=>{
            fn();
        },delay)
    }
}
let a=document.querySelector("#search")
a.addEventListener("input",debounce(function(){
    console.log("chala");
},700));

// throtling......... 
// next file....