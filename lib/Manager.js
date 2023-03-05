// Require used to import Employee class
const Employee = require("./Employee")
// The `Manager` class extends to the parent class: Employee 
// Constructor takes four arguments, super() method passes name, id and email to parent.
class Manager extends Employee {
constructor(name, id, email, officeNumber) {
super(name, id, email);
this.officeNumber = officeNumber;
}

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager"; // Overridden to return 'Manager'
  }
}

// statement allows other files to import and use this class
module.exports = Manager;

