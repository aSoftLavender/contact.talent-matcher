# Contact Talent Matcher

The Contact Talent Matcher application matches talent based on location.

The data undergoes several steps before being filtered by location to output names of matching talent. 

Firstly, the data is checked to ensure it isn't malformed using the isMalformed module which then returns the wellFormed data or in the case the data is malformed, it outputs a message stating the data is not in the desired format. There are pitfalls with this module as it checks data based on type object, however an array when using the typeof operator returns the value 'object'. For future consoderation, a json validator should be used.

Secondly, to ensure the matches are retrieved irrespective of case sensitivity regarding input location or values in the talent object, the lowerCasify module converts data and input to lowercase.

 Finally the data is filtered by location to output names of matching talent, in the event there is no matching talent, a message is output in the console as well as the location.

 # Getting started

 Git clone the repository
 Npm install
 Uncomment code in talentMatcher.js file
 Run * *node talentMatcher.js* * in the terminal

 # Running tests

 Use the * *npm run test* * command to run the test suites
