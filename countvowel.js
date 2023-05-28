const str = "sakshijoshi";
const countstr = (str)=>{
    const vowelregex = /[aeiou]/gi;
    const match = str.match(vowelregex);
    return match? match.length : 0;

}

console.log(countstr(str));