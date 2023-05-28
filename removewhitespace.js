const str = "precious infosystem pvt ltd";
const remove = (str) =>
{
    return str.replace(/\s/g, '' );
}
console.log(remove(str));