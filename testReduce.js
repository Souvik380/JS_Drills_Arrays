let reduce=require("./reduce")
const items = [1, 2, 3, 4, 5, 5]

function cb(a,b){
    return a+b
}

let ans1=reduce(items,cb,"undefined")
let ans2=reduce(items,cb,1)

console.log(ans1)
console.log(ans2)