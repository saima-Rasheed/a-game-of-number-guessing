#! /usr/bin/env node
import inquirer from"inquirer";

console.log("welcome to an iteresting number game with saima");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
 {
    name:"userGuessNumber",
    typer: "number",
    message: "Enter your guess number(Number Limit from 1 to 5):",
 },  
]); 

if (answer.userGuessNumber === randomNumber){
    console.log("congratulation ! You guess a correct number");
}
else{console.log("sorry, you guess a wrong number");}