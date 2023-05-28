const str = "Precious infosystem pvt ltd"
const title = (str)=>{
    return str.replace(/\w\S*/g,(word)=>word.charAt(0).toUpperCase()+word.substring(1).toLowerCase())
}
console.log(title(str));