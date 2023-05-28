const str = "12345";
const onlydigits =  (str) =>{
    return /^[0-9]+$/.test(str);
}
const digit = onlydigits(str);
console.log(digit);