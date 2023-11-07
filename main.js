import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter Your Name :"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select Your Opponent :",
    choices: ["Skeleton", "Assasin", "Zombie"]
});
console.log(opponent.select);
let p1 = new Player(player.name);
let o1 = new Opponent(player.name);
if (opponent.select == "Skeleton") {
    console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
    let ask = await inquirer.prompt({
        type: "list",
        name: "opt",
        message: "Select Your Opponent :",
        choices: ["Attack", "Drink Portion", "Run For Your Life...."],
    });
    if (ask.opt == "Attack") {
        console.log("attack");
    }
    if (ask.opt == "Drink Portion") {
        console.log("Drink");
    }
    if (ask.opt == "Run For Your Life...") {
        console.log("run");
    }
}
