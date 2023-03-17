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


// let drink = prompt("Do you want a hot or cold drink?");
// let drinkType = confirm(drink==name)
// alert (drinkType+"is getting prepared")

// console.log (drinkType)

let order;
let drink = prompt("What would you like to drink? hot or cold drink ? ");
if (drink == "Hot" || drink == "hot") {
    order = prompt("enter the name of drink you want :")
} else if (drink == "Cold" || drink == "cold") {
    order = prompt("enter the name of drink you want :")

}

alert("your order is perparing right now")

alert("Name : " + user + " , Your order : " + order)