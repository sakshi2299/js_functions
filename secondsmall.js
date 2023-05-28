const array = [34,12,55,67,23]
const secondsmallest = (array) =>{
    const sortedarray = array.sort((a,b)=>a-b)
    return sortedarray[1]
}
console.log(secondsmallest(array))