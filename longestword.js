const str = "precious infosystem pvt ltd";
const findword = (str)=>{
    const words = str.split(' ');
    let longestword = '';
    for(let i=0;i<words.length;i++)
    {
        if(words[i].length>longestword.length)
        {
            longestword = words[i];
        }
    }
    return longestword;
}
console.log(findword(str));