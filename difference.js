const arr1 = [1,2,3,4,5];
const arr2 = [1,2,90,76,5,78,90];
const difference = (arr1,arr2) =>{
    return arr1.filter(element => !arr2.includes(element));
}
console.log(difference(arr1,arr2));