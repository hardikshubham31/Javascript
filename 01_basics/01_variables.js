const accountId = 123456
let accounEmail = "hardik@google.com"
var accountPassword = "12345"
accountCity = "Ranchi"
let accountState;

// accountId = 2 // not allowed

accounEmail = "hs@hs.com"
accountPassword = "22222"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
bacause of issue in block scope and functional scope
*/

console.table([accountId, accounEmail, accountPassword, accountCity, accountState])