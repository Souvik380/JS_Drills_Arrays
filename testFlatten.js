let flatten=require("./flatten")
const nestedArray = [1, [2], [[3]], [[[4]]]];

let ans=flatten(nestedArray)

console.log(ans)