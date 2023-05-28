const ipAddress='0.255.255.255'
const validate=(ipAddress)=>{
    const ipregex = /^((25[0-5]2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipregex.test(ipAddress)
}
console.log(validate(ipAddress))