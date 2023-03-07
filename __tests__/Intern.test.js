// Import the Intern class
const Intern = require("../lib/Intern");

describe("Intern", () => {

  // Test the initialization of a new Intern object
  describe("Initialization", () => {
    it("should create a new Intern and set the school name", () => {
      const internStudent = new Intern("Gabe", 1, "GabrielTuason@gmail.com", "University of Toronto");
      expect(internStudent.school).toBe("University of Toronto");
    });
  });

  // Test the methods of the Intern class
  describe("Methods", () => {
    it("should return the school name using getSchool()", () => {
      const internStudent = new Intern("", 23, "", "University of Toronto");
      expect(internStudent.getSchool()).toBe("University of Toronto");
    });

    it("should return 'Intern' using getRole()", () => {
      const internStudent = new Intern("Gabe", 23, "GabrielTuason@gmail.com");
      expect(internStudent.getRole()).toBe("Intern");
    });
  });
});
