const arr = ["abcd","xyz","ab","sakshi","sakshijoshi","joshi"];
const getlongeststr = (arr) => {
    return arr.reduce((longest,current) =>{
        return current.length > longest.length ? current : longest ;},'');
}
//const longestst = getlongeststr(arr);
console.log(getlongeststr(arr));