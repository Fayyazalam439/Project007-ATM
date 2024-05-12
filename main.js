#! /usr/bin/env node
//PROJECT007-ATM...
import inquirer from "inquirer";
let myBalance = 50000; //Dollar
let myPin = 1452;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(`${"correct pin code"}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(`${"operationAns"}`);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        myBalance -= amountAns.amount;
        console.log(`${"Your remaining balance is: " + myBalance}`);
    }
    else if (operationAns.operation === "check balance") {
        console.log(`${"Your balance is: " + myBalance}`);
    }
}
else {
    console.log(`${"In correct pin code"}`);
}
;
