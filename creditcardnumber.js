const creditnum = 4111111111111111 ;
const validate = (creditnum)=>{
    const creditregex = /^(?:\d{4}-){3}\d{4}$|^\d{16}$/;
    return creditregex.test(creditnum)
}
console.log(validate(creditnum))