//variables
//1. Request the user's age

// let age=prompt("Enter your age");
// let name=prompt("Enter your name");

// //2. Show in a pop-up window the message: "Thank you for your answers"
// alert("Thank you for your answer");
// alert("I need to use variables to process your age");
// //3. Show in an alert box the message: "You are XX years old"

// document.write(`
// <p>Age: ${age} </p> 
// <p>Name: ${name} </p>`)

// alert("You are " + age + " years old");
// // alert(`You are ${age} years old`);
// console.log(age);
// console.log(name);

function firstFunction(school){
    let age=prompt("Enter your age");
    let name=prompt("Enter your name");
    
    //2. Show in a pop-up window the message: "Thank you for your answers"
    alert("Thank you for your answer");
    alert("I need to use variables to process your age");
    //3. Show in an alert box the message: "You are XX years old"
    
    document.write(`
    <p>Age: ${age} </p> 
    <p>Name: ${name} </p>
    <p> ${school} </p
    `)
    
    alert("You are " + age + " years old");
    // alert(`You are ${age} years old`);
    console.log(age);
    console.log(name);  
}

// function multiplyThree(number){
//     // let number = prompt("Enter a number");

//     console.log(number * 3);
// }
// function taxCalc(incomes){
//     //let number = prompt("Enter a number");
//     return incomes*.30;
// }

// function ssnAccount(){
//     let taxes=taxCalc(100000);
//     console.log(taxes);
// }

