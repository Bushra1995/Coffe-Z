alert("Welcome to Caffe-Z")
let name = prompt("What's your name?");
let gender = prompt("what is your Gender male/female ?");
if (gender=="female"){
    alert("Welcome MS " +name+"!")
}
else if (gender=="male"){
    alert("Welcome MR" +name+"!")
}
else {
    alert("Welcome " +name+"!")
}
let drinkType = prompt("Would you like a hot or cold drink?☕🍷");
let drinkName = prompt("What kind of drink would you like?");

alert("Your " + drinkType + " " + drinkName + " is being prepared!☕");

console.log(name + " ordered a " + drinkType + " " + drinkName + ".");
