// src/utils.js

function currentAgeForBirthYear(birthYear) {
  return new Date().getFullYear() - birthYear;
}

export { currentAgeForBirthYear };
