# Team_Profile_Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. Uses the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4) and Node.js v16. The user must enter team details such as who is the manager, the engineers involved and any interns. After adding information, the application will generate an html file that will show in the dist folder.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Assure that node.js is installed preferably version 16 (stable), found on https://nodejs.org/en/download/. To make sure the application is running correctly, the user needs to install two packages, namely inquirer version 8.2.4 and email-validator. To install these packages, the user should run the following commands in the terminal: `npm i inquirer@8.2.4` and `npm i email-validator`. When installing, it is important that you are in the correct directory otherwise issues may transpire.

## Usage

After installing the required files above, in your prefered command terminal you must type `node index.js` or `node index` to run the team profile generator. You will be shown a series of prompts regarding your team details. After filling each employee there should be a file named `myteamProfile.html` (output on `dist`). Details for email and Github usernames will be asked, so have it ready when prompted. Press `enter` to prompt the next sequence of questions. Use the `arrow keys` to go through the different choices of adding Intern, Engineer or you can Finalize the team. There is already an html sample in the dist, but will be replaced once you have created your own new team. Also make sure you open in browser to view the HTML file. Links for github are working if an account exists and email link opens a "mail to."    


For more help on usage, please view screenshot and video demonstration.
![screenshot](https://github.com/gabetuason/Team_Profile_Generator/blob/main/images/makingMyTeam.JPG)

Video:  https://watch.screencastify.com/v/ISLWg5jJJbl9BDirkqsK

## License

The project is licensed under: MIT License. To see the license permissions for commercial and non-commercial use, check the link https://opensource.org/licenses/MIT

## Contributing

This is an open source application, feel free to use this for any project. It is important to mention me as a contributor for distribution or modifications.
  
## Tests

During use, the generator should have node_modules and package-lock.json added in the file directory. To see if application processed accordingly there should be a HTML file `myteamProfile.html` (output on `dist`). In order to test the parent class Employee, and its extended sub classes Manager, Engineer and Intern. You can use `npm test`! The test suite verifies whether the instances of each class are constructed correctly with the intended data type and format. It also checks if the method functions of the classes behave as expected. Make sure you install jest by typing in the terminal `npm install --save-dev jest`. 

![screenshot](https://github.com/gabetuason/Team_Profile_Generator/blob/main/images/screenshotTests.JPG)
  
## Questions

For any questions about the application, please contact gabetuason24@gmail.com or view the github https://github.com/gabetuason to find me
