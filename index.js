// Importing the built-in Node.js module file system for reading and writing files
const fs = require("fs");
// Inquirer for Prompts, user input
const inquirer = require("inquirer");
// Makes sure email is properly formatted.
const validates = require("email-validator");

// Importing 3 files located in the lib folder. Classes will be used in the application to create instances of employees for the user's team
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Output path directories 
const path = require('path');
const dist = path.resolve(__dirname, "dist");
const output = path.join(dist, "myteamProfile.html");

// HTML template reference
const template = require("./src/template.js");


function beginApp(){
myteam = [];
addManager(myteam);

// Function prompts the user to input the name, ID, email, and office number of the manager
    function addManager(myteam){
    inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the manager's name: ",
                validate: (input) => {
                    if (input.trim() === '') {
                        return "Cannot be left blank. Please enter the manager's name.";
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "id",
                message: "Input the ID of the manager: ",
                validate: (input) => {
                    if (input.trim() === '') {
                        return "Cannot be left blank. Please enter the manager's ID.";
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "email",
                message: "Add manager's email address: ",
                validate: function (value) {
                    return validates.validate(value)
                        ? true
                        : "Please ensure you are entering a valid email address (for manager): example@gmail.com";
                    }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Add office number of the manager: ",
                validate: (input) => {
                    if (input.trim() === '') {
                        return "Cannot be left blank. Please enter the manager's office number.";
                    }
                    return true;
                }
            },
        ]).then((managerInfo) => {
            const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
            myteam.push(manager);
            makeTeam(myteam);
        });
    }
// Function prompts the user to input the name, ID, email, and school of the intern
    function addIntern(myteam){
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the intern's name: ",
                validate: (input) => {
                    if (input.trim() === '') {
                        return "Cannot be left blank. Please enter intern's name";
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "id",
                message: "Input the ID of intern: ",
                validate: (input) => {
                    if (input.trim() === '') {
                        return "Cannot be left blank. Please enter intern's ID";
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "email",
                message: "Add intern's email address: ",
                validate: function (value) {
                    return validates.validate(value)
                        ? true
                        : "Please ensure you are entering a valid email address (for intern): example@gmail.com";
                    }
            },
            {
                type: "input",
                name: "school",
                message: "Provide the name of the school/institute they attend: ",
                validate: (input) => {
                    if (input.trim() === '') {
                        return "Cannot be left blank. You must enter school/institute";
                    }
                    return true;
                }
            },
        ]).then((internInfo) => {
            const intern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school);
            myteam.push(intern);
            makeTeam(myteam);
        });
    }
// Function prompts the user to input the name, ID, email, and GitHub username of the engineer
    function addEngineer(myteam){
    inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the engineer's name: ",
                validate: (input) => {
                    if (input.trim() === '') {
                        return "Cannot be left blank. Please enter the engineer's name.";
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "id",
                message: "Input the ID of engineer: ",
                validate: (input) => {
                    if (input.trim() === '') {
                        return "Cannot be left blank. Please enter the engineer's ID.";
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "email",
                message: "Add engineer's email address: ", 
                validate: function (value) {
                    return validates.validate(value)
                        ? true
                        : "Please ensure you are entering a valid email address (for engineer): example@gmail.com";
                    }
            },
            {
                type: "input",
                name: "github",
                message: "Enter the GitHub username of the engineer: ",
                validate: (input) => {
                    if (input.trim() === '') {
                        return "Please enter the engineer's GitHub username.";
                    }
                    return true;
                }
            }
        ]).then((engineerInfo) => {
            const engineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github);
            myteam.push(engineer);
            makeTeam(myteam);
        });
    }

// User has to select one of three options: add an engineer, add an intern, or finalize the team profile
    function makeTeam(myteam){
        inquirer.prompt([
        {
        type: "list",
        name: "role",
        message: "Which type of team member do you want to add: ",
        choices: ["Engineer",
                  "Intern",
                  "Finalize Team Profile"],    
        }
        ]).then((options)=> {
            if (options.role === "Engineer"){
                addEngineer(myteam);
            } else if (options.role === "Intern"){
                addIntern(myteam);
            }else{

// template() is called to generate an HTML page with the information in the myteam array, and the page is saved to a file using the fs.writeFile() method.
                const html = template(myteam);
                fs.writeFile(output, html, (err) => {
                    if (err){
                        console.log("There was an error in the making of your team profile");
                    } else {
                        console.log("Your Team Profile has been generated in the `dist` directory\n The file is called `myteamProfile.html`");
                    } 
                });
            }

        });
    }
}

//Initialize Application
beginApp();



