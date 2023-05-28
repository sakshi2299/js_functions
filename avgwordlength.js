const sentence = "precious infosytem pvt ltd"
const avgwordlength = (sentence)=>{
    const words = sentence.split(' ');
    const totallength = words.reduce((sum,word)=>sum+word.length,0)
    return totallength / words.length;
}
console.log(avgwordlength(sentence))