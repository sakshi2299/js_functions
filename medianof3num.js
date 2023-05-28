let num1=5,num2=10,num3=15;
const findmedian = (num1,num2,num3)=>{
    const sortedarray = [num1,num2,num3].sort((a,b)=>a-b);
    return sortedarray[1];
}
console.log(findmedian(num1,num2,num3))