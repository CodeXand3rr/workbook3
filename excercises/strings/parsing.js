"use strict"
 
 let name = "Brenda Kaye"
 let positionOfSpace = name.indexOf(" ");  
 console.log(positionOfSpace)
 
 let firstName = name.substring  (0, positionOfSpace)
 console.log(firstName);
 
let lastName = name.substring(positionOfSpace +1);
console.log(lastName)

let message = `Your first name is ${firstName} and your last name is ${lastName}`
console.log(message)

