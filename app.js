const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let team = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function start() {

    inquirer.prompt([
        {
            type: "list",
            name: "newEmployee",
            message: "What type of now employee do you want to create?",
            choices: ["Manager", "Engineer", "Intern"],
        }
    ]).then(answers => {
        switch (answers.newEmployee) {
            case "Manager": {
                newManager()
            } break

            case "Engineer": {
                newEngineer()
            } break

            case "Intern": {
                newIntern()
            } break
            default:
                break;
        }
    })
}

function newManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name."
        },
        {
            type: "input",
            name: "id",
            message: "Enter your id."
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email."
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter your office number."
        },

    ]).then(answers => {
        team.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber))
        another()
    })
}

function newEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name."
        },
        {
            type: "input",
            name: "id",
            message: "Enter your id."
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email."
        },
        {
            type: "input",
            name: "github",
            message: "Enter your github username."
        },

    ]).then(answers => {
        team.push(new Engineer(answers.name, answers.id, answers.email, answers.github))
        another()
    })
}

function newIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name."
        },
        {
            type: "input",
            name: "id",
            message: "Enter your id."
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email."
        },
        {
            type: "input",
            name: "school",
            message: "Enter your school."
        },

    ]).then(answers => {
        team.push(new Manager(answers.name, answers.id, answers.email, answers.school))
        another()
    })
}

function another() {
    inquirer.prompt([
        {
            type: "list",
            name: "bool",
            message: "Would you like to enter another team member?",
            choices: ["Yes", "No"]
        },
    ]).then(answers => {
        if (answers.bool === "Yes") {
            start()
        } else {
            fs.writeFile("./output/team.html", render(team), function (err) {
                if (err) {
                    throw err
                }
                console.log("Saved")
            })
        }
    })
}




start()
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
