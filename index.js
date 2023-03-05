// Importing the built-in Node.js module file system for reading and writing files
const fs = require("fs");
// prompt for user input
const inquirer = require("inquirer");
// Package for email, makes sure email is properly formatted.
const validates = require("email-validator");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

