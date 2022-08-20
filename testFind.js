let find=require("./find")
const items = [1, 2, 3, 4, 5, 5]

function cb(x){
    return x%2===0
}

let ans=find(items,cb)
console.log(ans)