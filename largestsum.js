const array = [1,2,3,4]
const findlargestsumoftwonum=(array)=>{
    const sortedarray=array.sort((a,b)=>b-a)
    return sortedarray[0]+sortedarray[1];
}
console.log(findlargestsumoftwonum(array))