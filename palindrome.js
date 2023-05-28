const str ="abccba";
const isPalindrome = (str) =>{
   const rev= str.split('').reverse().join('');
   return rev===str;

}
const palindrome = isPalindrome(str);
console.log(palindrome);