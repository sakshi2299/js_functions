const numbers = [1,2,3,4,5];
const average = (numbers) =>{
    const sum= numbers.reduce((total,number)=>total+number,0);
    return sum/numbers.length;

}
console.log(average(numbers));