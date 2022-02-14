const { isMalformed } = require("../../malformed")


describe('isMalformed',()=>{
    // it("recieves expected data type", ()=>{})
    // it("returns a message if data is malformed", ()=>{})

    it("returns well formed data", ()=>{
      const wellFormed = [
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
      let result = isMalformed(wellFormed)
      expect(result).toStrictEqual([
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
    ])
    })

    it("each record object has three properties", ()=> {
        const testJsonArr = [
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
        
        let recordKeyNum = Object.keys(testJsonArr[0]).length
        let expectedKeyNum = 3
        expect(recordKeyNum).toEqual(expectedKeyNum)
    })

    describe('json object key order',()=>{
    //     it("each record contains name, location and dob keys", ()=>{})

        it("name key is first object key", ()=>{
            const testJsonArr = [
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
            let testJsonKey = Object.keys(testJsonArr[0])
            let expectedNameKey = testJsonKey[0]
            expect(expectedNameKey).toEqual("name")    
        })

        it("location key is second object key", ()=>{
            const testJsonArr = [
                {
                "name": "Diane Nguyen",
                "location": "Los Angeles",
                "date_of_birth": "1980-03-19"
              },
              {
                "name": "Krusty the Clown",
                "location": "SpringField",
                "date_of_birth": "1957-10-29"
              }
            ]
            let testJsonKey = Object.keys(testJsonArr[0])
            let expectedLocationKey = testJsonKey[1]
            expect(expectedLocationKey).toEqual("location")    
        })
        
        it("date_of_birth key is third object key", ()=>{
            const testJsonArr = [
                {
                "name": "Diane Nguyen",
                "location": "Los Angeles",
                "date_of_birth": "1980-03-19"
              },
              {
                "name": "Krusty the Clown",
                "location": "SpringField",
                "date_of_birth": "1957-10-29"
              }
            ]
            let testJsonKey = Object.keys(testJsonArr[0])
            let expectedDOBKey = testJsonKey[2]
            expect(expectedDOBKey).toEqual("date_of_birth")    
        })        
    })
})