let array = [12,23,35,74]
const product = (array)=>{
    let largestProduct = Number.MIM_SAFE_INTEGER;
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            const prod = array[i]*array[j]
            if(prod>largestProduct)
            {
                largestProduct=prod;
            }
        }
    }
    return largestProduct;
}
console.log(product(array))