url = "https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript";
const urlregex = (url) =>{
    const regexurl = /^(http|https):\/\/([a-zA-Z0-9-]+\.){1,}[a-zA-Z0-9-]{2,}$/;
    return regexurl.test(url);
}
console.log(urlregex(url))