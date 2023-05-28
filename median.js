const arr = [1,2,3,4,5,7,8];
const median = (arr) =>{
    const sorted = arr.sort((a,b)=>b-a);
    const middleindex = Math.floor(sorted.length/2);
    if(sorted.length%2===0)
    return (sorted[middleindex-1]+sorted[middleindex]/2);
    else
    return sorted[middleindex];
}
console.log(median(arr));
