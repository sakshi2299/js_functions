const array = [1,2,2,2,3,3,3,3,3,4,5,9,8,7]
const frequent_element = (array)=>{
    const frequencyMap = {};
    for(let i =1;i<array.length;i++){
        const element = array[i];
        if(frequencyMap[element]){
            frequencyMap[element]++;
        }
        else{
            frequencyMap[element]=1;

        }
    }
    let mostfrequent = null;
    let highestfrequency = 0;
    for(const element in frequencyMap){
        if(frequencyMap[element]>highestfrequency){
            mostfrequent = element;
            highestfrequency = frequencyMap[element];
        }
    }
    return mostfrequent;
}
console.log(frequent_element(array))