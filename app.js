'user strik';
// alert("Welcome to Caffe-Z")
// let userInfo = [];
// let user = prompt("What's your name?");

// function genderFunction() {

//     let gender = "";
//     while (gender !== "male" && gender !== "female") {
//         gender = prompt("Please enter a gender (male, female):");
//     }
//     return gender;
// }

// let gender = genderFunction();


// let Age = prompt("what's your age?");
// let drinkName = prompt("What kind of drink would you like?");

// // alert("Your " + Age + " " + drinkName + " is being prepared!☕");

// userInfo.push(user, gender, Age, drinkName)

// for (let i = 0; i < userInfo.length; i++) {
//     console.log(userInfo[i])
// }


// // This is Dom task

// let parent = document.getElementById("userName");

// let semiChild = document.createElement("div");

// let para = document.createElement("p");
// para.textContent = `${user}`;

// let list = document.createElement("ul");

// let lia = document.createElement("li");
// lia.textContent = `Gender: ${gender}`;

// let lib = document.createElement("li");
// lib.textContent = `Age: ${Age}`;

// let lic = document.createElement("li");
// lic.textContent = `drinkname: ${drinkName}`;


// list.appendChild(lia);
// list.appendChild(lib);
// list.appendChild(lic);

// semiChild.appendChild(para);
// semiChild.appendChild(list);

// parent.appendChild(semiChild); 


const form = document.getElementById("coffeZ");
const formContent = document.getElementById("formcontent");

coffeZ.addEventListener('submit', (event) => {     // This submit event is for send the data to the database to store the data
    event.preventDefault();

    let name = event.target.username.value;
    let age = event.target.age.value;
    let drinkType1 = event.target.drinktype1.checked ? event.target.drinktype1.value : "";
    let drinkType2 = event.target.drinktype2.checked ? event.target.drinktype2.value : "";
    let drink = event.target.drinkname.value;

    // This ? is If statement shorthand called: condetional (ternary) operator and this : "" is Else statement and it's optional operator

    render(name, age, drinkType1, drinkType2, drink)

});

function render(name, age, drinkType1, drinkType2, drink) {

    let username = document.createElement("p");
    username.textContent = `name: ${name}`;
    let userage = document.createElement("p");
    userage.textContent = `age: ${age}`;
    let drinkType = document.createElement("p");
    drinkType.textContent = `drink type: ${drinkType1} ${drinkType2}`;
    let drinkName = document.createElement("p");
    drinkName.textContent = `drink name: ${drink}`;
    formContent.appendChild(username);
    formContent.appendChild(userage);
    formContent.appendChild(drinkType);
    formContent.appendChild(drinkName);
    form.reset();      // This function is to clear the inputs that user has entered
}