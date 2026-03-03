const arr=[1,2,3,4,5,4,3,4,3,2,1,6,7,5,5,3,3];
function countFreq(arr){
    const freq={};
    let maxFreq=0;
    arr.forEach(num=>{
        if(freq[num]){
            freq[num]++;
        }
        else{
            freq[num]=1
        }
    })
    console.log(freq);
    // todo Object.entries() returns an array of key-value pairs from the freq object, which allows us to iterate through each number and its corresponding frequency. We can then compare each frequency to find the maximum frequency in the array.
    console.log(Object.entries(freq));
    for(let[key,value] of Object.entries(freq)){
        if(value>maxFreq){
            maxFreq=value;
        }
    }
    return maxFreq;
}
const freq=countFreq(arr);
console.log(freq);
