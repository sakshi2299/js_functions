const str = "abccba abcddcbsa abcdef gefdssdfeg"
const findpalindrome = (str)=>{
let longest = '';
for(let i=0;i<str.length;i++)
{
    for(let j=i+1;j<=str.length;j++){
        const substring = str.slice(i,j);
        if(isPalindrome(substring)&& substring.length>longest.length){
        longest = substring
    }
}
}
return longest
}
const isPalindrome=(str)=>{
    const reversestr = str.split('').reverse().join('')
    return str===reversestr;
}
console.log(findpalindrome(str))