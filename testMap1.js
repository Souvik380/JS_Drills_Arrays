let map=require("./map")
const items = [1, 2, 3, 4, 5, 5]

function Square(num){
    return num*num
}

let ans=map(items,Square)

for(let i=0;i<ans.length;i++){
    console.log(ans[i])
}
