const array = [1,2,3,4,4]
const value = 4;
const removeelements =(array,value)=>{
    return array.filter(element => element !== value)
}
console.log(removeelements(array,value))