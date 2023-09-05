// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// describe("objCap", () => {
//   it("capitalizes the first and last name of the name key data, then returns it into an array", () => {
//     const hitchhikersCharacters = [
//       { name: "ford prefect", occupation: "a hitchhiker" },
//       { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//       { name: "arthur dent", occupation: "a radio employee" }
//     ]
//       expect(objCap(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
//     })
// })

// Test = Good Failure: "ReferenceError: objCap is not defined"


// b) Create the function that makes the test pass.

// Pseudo 
// make a function taking in an arr of objs
// create a var that = an empty array (to push result into it later)
// use a for loop to iterate 
// create a var that breaks down the data into something easier to decipher 
// create a var that = the full name entered split into individual words
// create a var that = the first name with bracket Notation
// create a var that = the last name with bracket Notation
// create a var that = the first name var with the 0 index uppercased and sliced onto the rest of the uncapped OG word
// create a var that = the last name var with the 0 index uppercased and sliced onto the rest of the uncapped OG word
// push first name and last name capped into the empty array with the rest of the concatted sentence.

// const objCap = (arrayOfObjects) => {
//   let result = []
//   for(let i = 0; i < arrayOfObjects.length; i++){
//     let fullNameStr = arrayOfObjects[i].name
//     let fullNameArr = fullNameStr.split(" ")
//     let firstName = fullNameArr[0]
//     let lastName = fullNameArr[1]

//     let capFirstName = firstName[0].toUpperCase() + firstName.slice(1)
//     let capLastName = lastName[0].toUpperCase() + lastName.slice(1)

//     result.push(capFirstName + " " + capLastName + " is " + arrayOfObjects[i].occupation + ".")
//   }
//   return result
// }

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// describe("divNum", () => {
//   it("takesin an array of random values, returns the numbers and divides them by 3", () => {
// const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// // Expected output: [ 2, 0, -1, 0 ]
// const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// // Expected output: [ 2, 1, -1 ]
// expect(divNum(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
// expect(divNum(hodgepodge2)).toEqual([ 2, 1, -1 ])
//   })
// })


// b) Create the function that makes the test pass.

// Test = Good Failure: ReferenceError: divNum is not defined

// Pseudo code: create a function that takes in an array
// filter through the array to return only an array of nums (use typeof with filter)
// return new array with map to the action modulo 3


// const divNum = (array) => {
//  let numArr = array.filter((value) => typeof value === "number")
//  return numArr.map(value => value % 3)
// }

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("addNum", () => {
  it("create a function that cubes an array returning the sum as an integer", () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]
  expect(addNum(cubeAndSum1)).toEqual(99)
  expect(addNum(cubeAndSum2)).toEqual(1125)
  })
})
// Expected output: 99
// Expected output: 1125

// Good failure: ReferenceError: addNum is not defined

// b) Create the function that makes the test pass.

// Pseudo code: create a function taking in an array
// create 3 variables that cube the number
// return the vars added 

const addNum = (array) => {
  let cube1 = array[0] * array[0] * array[0]
  let cube2 = array[1] * array[1] * array[1]
  let cube3 = array[2] * array[2] * array[2]
  return cube1 + cube2 + cube3
}
