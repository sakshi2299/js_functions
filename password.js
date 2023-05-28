const length =7;
const passwordgen = (length)=>{
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for(let i=0;i<length;i++){
        const random = Math.floor(Math.random()*characters.length);
        password+=characters[random];
    }
    return password;
}
console.log(passwordgen(length));