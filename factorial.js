let num = 5;
function factorial(num)
{
    if(num===0||num===1)
    return 1;
    else{
        return num*factorial(num-1);
    }
}
const fact =factorial(num);
console.log(fact);