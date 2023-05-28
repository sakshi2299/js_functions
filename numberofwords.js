const str = "precious infosystem pvt ltd";
const getwords = (str)=>{
    return str.split(' ').length;
}
const words = getwords(str);
console.log(words);