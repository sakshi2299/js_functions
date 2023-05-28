const array = [12,34,23,34,45]
const position=2
const rotatearrayright=(array,position)=>{
    const rotatedarray = [...array];
    for(let i=0;i<position;i++){
        rotatedarray.unshift(rotatedarray.pop())

    }
    return rotatedarray
}
console.log(rotatearrayright(array,position))