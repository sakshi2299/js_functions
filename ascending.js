const array = [1,288,65,2,56]
const isSorted = (array)=>{
    for(let i=0;i<array.length-1;i++)
    {
        if(array[i]>array[i+1])
        {
            return false;
        }
    }
    return true;
}
console.log(isSorted(array))