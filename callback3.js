console.log(1)
var arr = [];
for(var i = 0; i < 20000000; i++){
	arr.push({'num':i})
}
console.log(2)
arr.forEach(function(v, i) {
	v.power = v.num + 100
	if(v.num==100) console.log(3)
})
console.log(4)