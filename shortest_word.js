const sentence = "sakshi joshi is a student"
const shortest = (sentence) => {
    const words = sentence.split(' ');
    let shortestword = words[0];
    for(let i=1;i<words.length;i++){
        if (words[i].length<shortestword.length)
        {
            shortestword = words[i];
        }
    }
    return shortestword;
}
console.log(shortest(sentence))