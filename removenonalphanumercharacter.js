const str = "precious infosytem pvt ltd $#@%^"
const removenonalpha =(str)=>{
    return str.replace(/[^0-9a-zA-Z]/g, '')

}
console.log(removenonalpha(str))