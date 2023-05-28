const arr = [1,2,3,4,5];
const sumsquare = (arr)=>{
    return arr.reduce((sum,number)=>sum+Math.pow(number,2),0);
}
console.log(sumsquare(arr));