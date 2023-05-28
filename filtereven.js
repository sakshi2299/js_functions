const arr = [2,33,54,20];
const isEven = (arr) => {
    return arr.filter(number => number%2===0)
}
const Even = isEven(arr);
console.log(Even)