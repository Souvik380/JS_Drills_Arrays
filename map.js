function map(elements, cb) {
    let ans=[]

    for(let i=0;i<elements.length;i++){
        ans.push(cb(elements[i]))
    }

    return ans
}

module.exports=map

