// The parent class that the other three classes will extend to (Engineer, Intern and Manager)
class Employee {
// The constructor function for the Employee class, contains 3 arguments.
  constructor(name, id, email) {
// set properties on the new object
    this.name = name;
    this.id = id;
    this.email = email;
  }

    getName() {
    return this.name;
  }

    getId() {
    return this.id;
  }

    getEmail() {
    return this.email;
  }

    getRole() {
    return "Employee"; // Returns 'Employee'
  }
}

// Export the Employee class so it can be used in other modules
module.exports = Employee;
