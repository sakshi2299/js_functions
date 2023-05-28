const fibnum = (n)=>{
    const fib = [0,1]
    for(let i=2;i<n;i++){
        const next = fib[i=1]+fib[i-2]
        fib.push(next);
    }
    return fib;
}
console.log(fibnum(15))