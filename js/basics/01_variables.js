/// const means the value fixed in the code
const accountId = 156546
/// 
let accountEmail = "xyz@gmail.com"

var accountPassword = "1234xyz"

let accountState

accountCity = "nagpur"

// accountId = 2 // not allowed

accountEmail = "abc@gmail.com"
accountPassword = "12345678xyz"
accountCity = "banglore"


/*
prefer not to use var because of issue in block scope and functional scop.
var can be re-declared but not let keyword variable. 
*/

console.log(accountId);

/// console.table() is a built-in JavaScript function that displays data as a formatted table in the console — instead of plain text or objects. 

console.table([accountId,accountEmail, accountPassword, accountCity, accountState])
