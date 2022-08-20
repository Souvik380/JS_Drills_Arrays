let ans=[]
function flatten(elements){
    for(let i=0;i<elements.length;i++){
        if(typeof(elements[i])=="object"){
            flatten(elements[i])
        }else{
            ans.push(elements[i])
        }
    }

    return ans
}

module.exports=flatten

