const str= " abc def! fed!@cba"
const palindrome= (str)=>{
    const alphanumeric = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    const reverse = alphanumeric.split('').reverse().join('')
    return alphanumeric === reverse

}
console.log(palindrome(str))