const arr = ["abc","xyz","pqr","dfg"]
const docapitalize = (str) => {
    return arr.map(s => s.toUpperCase());
}
const capital = docapitalize(arr);
console.log(capital);