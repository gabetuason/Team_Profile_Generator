const Employee = require("../lib/Employee");
// Jest tests for the Employee class. It tests if a new Employee object can be created, 
// if the object's properties are set correctly using the constructor, and if the object's methods (getName(), getId(), getEmail(), and getRole()) return the expected values

test("Can create a new Employee object", () => {
const employee = new Employee();
expect(typeof (employee)).toBe("object");
});

// Test the Employee object using the constructor and check if the properties are correctly set
test("Check if the Employee object is created with the given values", () => {
const employee = new Employee("Gabe", 42, "GabrielTuason@gmail.com")
expect(employee.name).toBe("Gabe");
expect(employee.id).toBe(42);
expect(employee.email).toBe("GabrielTuason@gmail.com")
});

// Test if the getName() function returns the correct value for the Employee object
test("Check if the getName() function returns the correct name", () => {
const employee = new Employee("Gabe")
expect(employee.getName()).toBe("Gabe");
});





// Test if the getId() function returns the correct value for the Employee object
test('Check if the getId() function returns the correct ID', () => {
const employee = new Employee("Tua", 42)
expect(employee.getId()).toBe(42);
});

// Test if the getEmail() function returns the correct value for the Employee object
test('Check if the getEmail() function returns the correct email address', () => {
const employee = new Employee("Tua", 42, "GabrielTuason@gmail.com")
expect(employee.getEmail()).toBe("GabrielTuason@gmail.com")
});

// Test if the getRole() function returns the correct value for the Employee object
test('Check if the getRole() function returns the correct role', () => {
const employee = new Employee("Gabe", 42, "GabrielTuason@gmail.com")
expect(employee.getRole()).toBe("Employee")
})