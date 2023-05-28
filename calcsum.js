const arr = [1,2,4,5];
const calculate = (arr) => {
    return arr.reduce((sum,num)=>sum+num,0);
}
const sum = calculate(arr);
console.log(sum);