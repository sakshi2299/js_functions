const arr = [23,14,2,78,77]
const second = (arr) => {
    const sortedarray = arr.sort((a,b)=>b-a);
    return sortedarray[1];
}
const seclarge = second(arr);
console.log(seclarge);