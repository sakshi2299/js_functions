const str = "precious infosystem pvt ltd";
const capital = (str) =>{
    const words = str.split(' ');
    const capitalizedwords = words.map(word=>word.charAt(0).toUpperCase()+word.slice(1));
    return capitalizedwords.join(' ');

}
console.log(capital(str));

