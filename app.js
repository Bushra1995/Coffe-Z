'user strik';
alert("Welcome to Caffe-Z")
let userInfo = [];
let user = prompt("What's your name?");

function genderFunction() {

    let gender = "";
    while (gender !== "male" && gender !== "female") {
        gender = prompt("Please enter a gender (male, female):");
    }
    return gender;
}

let gender = genderFunction();


let Age = prompt("what's your age?");
let drinkName = prompt("What kind of drink would you like?");

// alert("Your " + Age + " " + drinkName + " is being prepared!☕");

userInfo.push(user, gender, Age, drinkName)

for (let i = 0; i < userInfo.length; i++) {
    console.log(userInfo[i])
}


// This is Dom task

let parent = document.getElementById("userName");

let semiChild = document.createElement("div");

let para = document.createElement("p");
para.textContent = `${user}`;

let list = document.createElement("ul");

let lia = document.createElement("li");
lia.textContent = `Gender: ${gender}`;

let lib = document.createElement("li");
lib.textContent = `Age: ${Age}`;

let lic = document.createElement("li");
lic.textContent = `drinkname: ${drinkName}`;


list.appendChild(lia);
list.appendChild(lib);
list.appendChild(lic);

semiChild.appendChild(para);
semiChild.appendChild(list);

parent.appendChild(semiChild);