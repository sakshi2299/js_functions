const suminrange = (start,end)=>{
    let sum=0;
    for(let i= start;i<=end;i++)
    {
        sum+=i;
    }
    return sum;
}
console.log(suminrange(3,5))