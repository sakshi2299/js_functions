const arr=[1,2,20,7];
const getlargest = (arr) => {
    return Math.max(...arr);
}
const largest = getlargest(arr);
console.log(largest);