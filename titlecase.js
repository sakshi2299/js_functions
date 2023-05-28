const str = "sakshi joshi"
const toTitleCase=(str)=>{
    return str.replace(/\b\w/g,char => char.toUpperCase())
}
console.log(toTitleCase(str))