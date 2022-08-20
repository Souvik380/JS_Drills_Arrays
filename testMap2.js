let map=require("./map")
const items = [1, 2, 3, 4, 5, 5]

function SQRT(num){
    return Math.sqrt(num)
    
}

let ans=map(items,SQRT)

for(let i=0;i<ans.length;i++){
    console.log(ans[i])
}
