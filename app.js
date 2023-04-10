let userName = prompt("Please Enter Your Name:");


let age = prompt("Please Enter Your Age:");
if (age <= 0) {
    alert("your age should not be zero or less");
} else {
    alert(`your age is ${age}`)
}


let gender = prompt("Please Enter Your Gender: (male or female)").toLocaleLowerCase();
let gen = 0;

if (gender === "male") {
    gen = "Mr";
} else if (gender === "female") {
    gen = "Ms";
} else {
    gen = "";
}



if (confirm("Do you want to go to welcoming page?") === true) {
    alert(`Hello ${gen} ${userName}, Welcome to my website`);
}