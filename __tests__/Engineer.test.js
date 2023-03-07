const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    // Test if the Engineer instance can have a Github username
    it('should have a Github username', () => {
        const engineer = new Engineer("Gabe", 22, "GabrielTuason@gmail.com", "habibi")
        expect(engineer.github).toBe("habibi");
    });

    // Test if we can retrieve the Github username using getGithub()
    it('getGithub() should return the Github username of the Engineer', () => {
        const engineer = new Engineer("Gabe", 22, "GabrielTuason@gmail.com", "habibi")
        expect(engineer.getGithub()).toBe("habibi");
    });

    // Test if we can retrieve the role of the Engineer instance
    it('getRole() should return "Engineer"', () => {
        const engineer = new Engineer("Gabe", 22, "GabrielTuason@gmail.com", "gtuason")
        expect(engineer.getRole()).toBe("Engineer");
    });
  });
});
