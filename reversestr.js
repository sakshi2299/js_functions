const str = "hello world";
const reversestring = (str) =>{
    return str.split('').reverse().join('');
}
const reverse= reversestring(str);
console.log(reverse);