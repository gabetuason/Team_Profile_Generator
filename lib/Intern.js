// Require used to import Employee class
const Employee = require("./Employee")
// The `Intern` class extends to the parent class: Employee 
// Constructor takes four arguments, super() method passes name, id and email to parent.
class Intern extends Employee {
constructor(name, id, email, school) {
super(name, id, email);
this.school = school;
}

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern"; // Overridden to return 'Intern'
  }
}

// statement allows other files to import and use this class
module.exports = Intern;

