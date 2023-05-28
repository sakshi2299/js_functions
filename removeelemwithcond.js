const array = [1,2,2,3,4]
const remelem =(array,condition)=>
{
    return array.filter(element=>!condition(element))
}
console.log(remelem(array,2))