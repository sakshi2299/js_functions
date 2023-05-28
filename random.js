const min = 5;
const max = 50;
const random = (min,max) =>{
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(random(min,max));