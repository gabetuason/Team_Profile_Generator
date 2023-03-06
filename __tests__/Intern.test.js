// Importing the Intern class
const Intern = require("../lib/Intern");

// Test if a new Intern can be created and if the school name can be set
test('Can create a new Intern and set the school name', () => {
const internStudent = new Intern("Gabe", 1, "GabrielTuason@gmail.com", "University of Toronto");
expect(internStudent.school).toBe("University of Toronto");
});

// Test if we can get the school name using getSchool()
test('Can get the school name using getSchool()', () => {
const internStudent = new Intern("", 23, "", "University of Toronto");
expect(internStudent.getSchool()).toBe("University of Toronto");
});

// Test if getRole() returns "Intern"
test('Can get the role using getRole()', () => {
const internStudent = new Intern("Gabe", 23, "GabrielTuason@gmail.com");
expect(internStudent.getRole()).toBe("Intern");
});