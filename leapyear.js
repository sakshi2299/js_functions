let year = 2023;
const leapyear = (year) => {
    if(year%4===0&&(year%100!==0||year%400===0))
    return true;
    else
    return false;

}
const leapornot = leapyear(year);
console.log(leapornot);