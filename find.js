function find(elements, cb) {
    for(let i=0;i<elements.length;i++){
        let num=elements[i]
        if(cb(num)){
            return num
        }
    }
    return undefined
}

module.exports=find