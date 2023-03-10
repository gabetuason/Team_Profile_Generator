// Importing the Manager class
const Manager = require("../lib/Manager");

describe("Manager", () => {
  // Test if we can create a new Manager object with the constructor
  it("should create a new Manager object using the constructor", () => {
    const managerTest = new Manager("Gabe", 9, "GabrielTuason@gmail.com", "29");
    expect(typeof managerTest).toBe("object");
  });

  // Test if we can get the office number of a Manager object
  it('should get the office number of a Manager object using getOfficeNumber()', () => {
    const managerTest = new Manager("Gabe", 12, "GabrielTuason@gmail.com", "29");
    expect(managerTest.getOfficeNumber()).toBe("29");
  });

  // Test if we can get the role of a Manager object
  it('should get the role of a Manager object using getRole()', () => {
    const managerTest = new Manager("Gabe", 12, "GabrielTuason@gmail.com");
    expect(managerTest.getRole()).toBe("Manager");
  });
});
