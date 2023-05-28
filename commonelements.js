const arr1 = [2,3,4,5];
const arr2= [2,5,7,9];
const getElement = (arr1,arr2) => {
    return arr1.filter(element => arr2.includes(element));
}
const Element = getElement(arr1,arr2);
console.log(Element);