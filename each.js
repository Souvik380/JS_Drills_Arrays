function each(elements, cb) {
    while(cb!=elements.length){
        console.log(elements[cb])
        cb++
    }
}

module.exports=each