const array=[2,4,8,10]
const missing = (array) =>{
    const n = array.length+1;
    const expectedsum = (n*(n+1))/2;
    const actualsum = array.reduce((sum,number)=>sum+number,0)
    return expectedsum - actualsum;
}
console.log(missing(array))