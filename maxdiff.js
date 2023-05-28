const array=[12,56,22,54,90]
const findmaxdiff = (array)=>{
let maxdiff = 0;
for(let i=0; i<array.length;i++)
{
    for(let j=i+1;j<array.length;j++){
        const diff = Math.abs(array[i]-array[j])
        if(diff>maxdiff){
            maxdiff= diff;
        }
    }
}
return maxdiff;
}
console.log(findmaxdiff(array))