const { talentMatcher } = require("../../talentMatcher")

describe('Talent Matcher',()=>{
    // it("takes a valid json as an argument", ()=>{})
    // it("takes a string as a second argument", ()=>{})
    // it("outputs expected matches", ()=>{{})

    it("logs if there are no matches",()=>{
        let expectedOutput = null;
        let testData = [
            {
            "name": "Princess Bubblegum",
            "location": "Candy Kingdom",
            "date_of_birth": "1980-03-19"
          },
          {
            "name": "Flame Princess",
            "location": "Fire Kingdom",
            "date_of_birth": "1957-10-29"
          }
        ]
        let location = "Terebithia"
        let output = talentMatcher(testData, location)
        expectedOutput = output
        expect(expectedOutput).toMatch("No talent matches in this location")
    })
})