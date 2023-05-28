const arr = [12,34,12,45,67,45];
const removedup = (arr) =>{
    return [...new Set(arr)];
}
const remove = removedup(arr);
console.log(remove);
