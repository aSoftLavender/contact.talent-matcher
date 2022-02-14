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

//UNCOMMENT ME
// console.log(talentMatcher([
//     {
//     "name": "Princess Bubblegum",
//     "location": "Candy Kingdom",
//     "date_of_birth": "1980-03-19"
//   },
//   {
//     "name": "Flame Princess",
//     "location": "Fire Kingdom",
//     "date_of_birth": "1957-10-29"
//   },
//   {
//     "name": "Slime Princess",
//     "location": "Candy Kingdom",
//     "date_of_birth": "1987-08-22"
//   }
// ], "Fire Kingdom"))

module.exports = {
  talentMatcher,
}