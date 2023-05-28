const sentence = "precious infosystem pvt ltd";
const capitalizedwords = (sentence)=>{
    return sentence.replace(/\b\w/g, char =>char.toUpperCase())
}
console.log(capitalizedwords(sentence))