const str = "sakshi joshi"
const removevowel = (str)=>{
    return str.replace(/[aeiou]/gi, '');
}
console.log(removevowel(str))