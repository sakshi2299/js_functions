const array = [1,2,3,4,3,3,2,4]
const element = 3
const count = (array,element)=>{
    return array.reduce((count,current)=>count+(current === element ?1:0),0)

}
console.log(count(array,element))