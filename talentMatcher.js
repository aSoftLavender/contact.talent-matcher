const { isMalformed } = require("./malformed")
const { lowerCasify } = require("./lowercase")

function talentMatcher(jsonArray, location){
    let data = isMalformed(jsonArray)
    let wellFormedArr = lowerCasify(data)
    let capLocation = location.toLowerCase()
    const filtered = wellFormedArr.filter(wellFormed => wellFormed.location === capLocation)
    if (filtered.length === 0){
        return "No talent matches in this location"
    } else{
        for (i=0; i<wellFormedArr.length; i++){
            if(wellFormedArr[i].location === capLocation){
              let matches = []
              matches.push(wellFormedArr[i])
              for (let m= 0; m< matches.length;m++){
                  console.log("Talent match:" + matches[m].name)
              } 
            }  
        }                
    }
    return location
}

module.exports = {
  talentMatcher,
}