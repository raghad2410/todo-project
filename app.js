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


// let theFinalarray = []
// function answerFunction(answer) {
//     if (answer.toLocaleLowerCase() === "yes") {
//         theFinalarray.push("Yes")
//     } else if (answer.toLocaleLowerCase() === "no") {
//         theFinalarray.push("No")

//     } else {
//         theFinalarray.push("Invalid")

//     }
//     // return answer;
//     // console.log(answerFunction(answer))
// }
// answerFunction(maritalStatus)
// answerFunction(jordanianCitizens)
// answerFunction(ownACar)

// function theArrayOfAnswers(answer){
//     for (i = 0; i < theFinalarray.length; i++){
//         theFinalarray = []
//         theFinalarray.push(answer)
//     }
//     return theFinalarray
// }
// console.log(answer)

// function consoleArray(theFinalarray){
// for (i = 0; i < theFinalarray.length; i++) {

//     console.log(theFinalarray[i]);
// }
// return theFinalarray
// }



// function answerss (ans) {
//     if (answers. === "yes")
// }

// function theQuest(thee) {

// }
// theQues("Are You A Front-End Developer?");
// theQues("Are You A Back-End Developer?");
// theQues("Are You Familiar With JavaScript Language?");


let arrayAnswer = [];

function theQues(quesYesNo) {
    answers = prompt(quesYesNo)

    function array(arrayAns) {
        if (arrayAns.toLocaleLowerCase() === "yes") {
            arrayAnswer.push("Yes")
        } else if (arrayAns.toLocaleLowerCase() === "no") {
            arrayAnswer.push("No")
        } else {
            arrayAnswer.push("Invalid")
        }
        return arrayAns
    }
    rrr = (array(answers))

    return (theQues)
}
console.log(arrayAnswer)
theQues("Are You A Front-End Developer?");
theQues("Are You A Back-End Developer?");
theQues("Are You Familiar With JavaScript Language?");

function wholeArray(wholeArr) {
    for (i = 0; i < wholeArr.length; i++) {

        console.log(wholeArr[i]);

    }
    return wholeArr
}
wholeArray(arrayAnswer)



// let theFinalarray = [];

// function theQues(questions) {
//     answers = prompt(questions)

//     function array(rag) {
//         if (rag.toLocaleLowerCase() === "yes") {
//             theFinalarray.push("Yes")
//         } else if (rag.toLocaleLowerCase() === "no") {
//             theFinalarray.push("No")
//         } else {
//             theFinalarray.push("Invalid")
//         }
//         return rag
//     }
//     rrr = (array(answers))

//     return (theQues)
// }
// console.log(theFinalarray)
// theQues("Are You A Front-End Developer?");
// theQues("Are You A Back-End Developer?");
// theQues("Are You Familiar With JavaScript Language?");

// function consoleArray(xarray) {
//     for (i = 0; i < xarray.length; i++) {

//         console.log(xarray[i]);

//     }
//     return xarray
// }
// consoleArray(theFinalarray)
