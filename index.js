#! /usr/bin/env node
//import inquirer and chalk
import inquirer from "inquirer";
import chalk from "chalk";
//welcome note:
console.log(chalk.red("\n\tWELCOME TO WORD COUNTER\n"));
let answer = await inquirer.prompt([
    {
        name: "sentance",
        type: "input",
        message: "Write a sentance to count words: "
    }
]);
//Trimming sentance to remove white spaces and split to count each words without space:
let wordCounter = answer.sentance.trim().split(" ");
//console words of sentance:
console.log(chalk.blue("\nSentence Words:"));
console.log(wordCounter);
//console wordcounter with .lemgth method to count the liost of array:
console.log(chalk.blue(`\nyour sentance words count is: "${wordCounter.length}"`));
