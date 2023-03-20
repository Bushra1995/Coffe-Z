alert("Welcome to Caffe-Z")
let userInfo = [];
let user = prompt("What's your name?");
let gender = "";


// if (gender=="female"){
//     alert("Welcome MS " +name+"!")
// }
// else if (gender=="male"){
//     alert("Welcome MR" +name+"!")
// }
// else {
//     alert("Welcome " +name+"!")
// }


while (gender !== "male" && gender !== "female") {
    gender = prompt("Please enter a gender (male, female):");
}

let drinkType = prompt("Would you like a hot or cold drink?☕🍷");
let drinkName = prompt("What kind of drink would you like?");

alert("Your " + drinkType + " " + drinkName + " is being prepared!☕");

userInfo.push(user, gender, drinkType, drinkName)

for (let i = 0; i < userInfo.length; i++) {
    console.log(userInfo[i])
}
