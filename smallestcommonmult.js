let num1=3,num2=7;
const smallcommmult = (num1,num2)=>{
    const gcd = findgreatestcommondivisor(num1,num2)
    return (num1,num2)/gcd;
}
const findgreatestcommondivisor=(a,b)=>{
    while(b!=0){
        const temp=b;
        b=a%b;
        a=temp;
    }
    return a;
}
console.log(smallcommmult(num1,num2))