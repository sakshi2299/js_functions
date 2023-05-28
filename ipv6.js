const ipAddress = "2001:0000:3238:DFE1:0063:0000:0000:FEFB";
const validate = (ipAddress)=>{
    const ipregex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    return ipregex.test(ipAddress);
}
console.log(validate(ipAddress))