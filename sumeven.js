const arr = [1,2,3,4,5,6];
const even = (arr)=>{
    return arr.reduce((sum,number)=>{
    if(number%2===0)
    {
    return sum+number;
    }
    else
    {
    return sum;
    }
    },0);
}
console.log(even(arr));