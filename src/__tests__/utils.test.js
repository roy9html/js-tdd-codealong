import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    const birthYear = 1984;
    const expectedAge = new Date().getFullYear() - birthYear;
    const ageOfPerson = currentAgeForBirthYear(birthYear);
    expect(ageOfPerson).toBe(expectedAge);
  });

  it("returns the current year for someone born in year 0", () => {
    const currentYear = new Date().getFullYear();
    const age = currentAgeForBirthYear(0);
    expect(age).toBe(currentYear);
  });
});
