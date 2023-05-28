const email ="sakshi.joshi0722@gmail.com";
const valid = (email)=>{
    const emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailregex.test(email);
}
console.log(valid(email));