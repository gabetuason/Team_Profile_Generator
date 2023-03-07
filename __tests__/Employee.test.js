// Importing lib employee
const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    // Test if a new Employee object can be created
    it("should create a new Employee object", () => {
      const employee = new Employee();
      expect(typeof (employee)).toBe("object");
    });

    // Test if the object's properties are set correctly using the constructor
    it("should set the object's properties correctly using the constructor", () => {
      const employee = new Employee("Gabe", 42, "GabrielTuason@gmail.com");
      expect(employee.name).toBe("Gabe");
      expect(employee.id).toBe(42);
      expect(employee.email).toBe("GabrielTuason@gmail.com");
    });

    // Test if the getName() function returns the expected value for the Employee object
    it("should return the expected name value when the getName() function is called", () => {
      const employee = new Employee("Gabe");
      expect(employee.getName()).toBe("Gabe");
    });



    // Test if the getId() function returns the expected value for the Employee object
    it("should return the expected ID value when the getId() function is called", () => {
      const employee = new Employee("Tua", 42);
      expect(employee.getId()).toBe(42);
    });

    // Test if the getEmail() function returns the expected value for the Employee object
    it("should return the expected email value when the getEmail() function is called", () => {
      const employee = new Employee("Tua", 42, "GabrielTuason@gmail.com");
      expect(employee.getEmail()).toBe("GabrielTuason@gmail.com");
    });

    // Test if the getRole() function returns the expected value for the Employee object
    it("should return the expected role value when the getRole() function is called", () => {
      const employee = new Employee("Gabe", 42, "GabrielTuason@gmail.com");
      expect(employee.getRole()).toBe("Employee");
    });
  });
});


