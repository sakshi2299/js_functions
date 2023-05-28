const date1 = new Date('07/13/2023');
const date2 = new Date('09/22/2023');
const calculatedatedifference = (date1,date2)=>{
    const oneday = 24*60*60*1000;//one day in milliseconds
    const diffindays = Math.round(Math.abs((date1-date2)/oneday))
    return diffindays;
}
console.log(calculatedatedifference(date1,date2))