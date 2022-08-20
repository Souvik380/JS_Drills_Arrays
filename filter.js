function filter(elements, cb) {
    let ans=[]

    for(let i=0;i<elements.length;i++){
        let num=elements[i]
        if(cb(num)){
            ans.push(num)
        }
    }
    return ans
}

module.exports=filter