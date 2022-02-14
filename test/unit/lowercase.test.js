const { lowerCasify } = require("../../lowercase")

describe('Talent Matcher',()=>{
    it('converts all values into lowercase', ()=>{
        let initialArr = [
                {
                "name": "Princess Bubblegum",
                "location": "Candy Kingdom",
                "date_of_birth": "1980-03-19"
              },
              {
                "name": "Flame Princess",
                "location": "Fire Kingdom",
                "date_of_birth": "1957-10-29"
              },
              {
                "name": "Slime Princess",
                "location": "Candy Kingdom",
                "date_of_birth": "1987-08-22"
              }
            ]
        let convertedArr = lowerCasify(initialArr)
        
        expect(convertedArr).toMatch([
            {
              name: 'princess bubblegum',
              location: 'candy kingdom',
              date_of_birth: '1980-03-19'
            },
            {
              name: 'flame princess',
              location: 'fire kingdom',
              date_of_birth: '1957-10-29'
            },
            {
              name: 'slime princess',
              location: 'candy kingdom',
              date_of_birth: '1987-08-22'
            }
          ])
    })
})
