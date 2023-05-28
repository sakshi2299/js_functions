const str = "precious infosystem pvt ltd";
const reverseword = (str) => {
    return str.split(' ').reverse().join(' ');
}
const reverse = reverseword(str);
console.log(reverse);