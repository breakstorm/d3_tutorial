var data = [{"user":1}, {"user":2}, {"user":3}]
console.log("1")
function makePower(data){
    console.log("2")
    return data.power = data.user +10
}
data.forEach(function(data){
    console.log("3")
    makePower(data)
})

console.log("4")
console.log(data[0].power)