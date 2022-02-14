function isMalformed(data){
    let wellFormedData = null
     if(typeof(data) !== "object"){
        return ("Data is not in desired format")
    }
    else{
        wellFormedData = data
    }
    return wellFormedData
}

module.exports = {
    isMalformed,
}