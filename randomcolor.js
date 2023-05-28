const generatecolor=()=>{
    const letters = '0123456789ABCDEF'
    let color = '#'
    for(let i=0 ; i<6;i++)
    {
        const randomIndex = Math.floor(Math.random()*16)
        color = letters[randomIndex]
    }
    return color
}
console.log(generatecolor())