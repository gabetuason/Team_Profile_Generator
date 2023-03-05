// Require used to import Employee class
const Employee = require("./Employee")
// The `Engineer` class extends to the parent class: Employee 
// Constructor takes four arguments, super() method passes name, id and email to parent.
class Engineer extends Employee {
constructor(name, id, email, github) {
super(name, id, email);
this.github = github;
}

  getGithub() {
    return this.github; // GitHub username
  }

  getRole() {
    return "Engineer"; // Overridden to return 'Engineer'
  }
}

// statement allows other files to import and use this class
module.exports = Engineer;













