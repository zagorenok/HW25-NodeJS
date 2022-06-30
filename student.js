const Person = require('./person');

class Student extends Person {
  constructor(name, age, gendor, interests) {
    super(name, age, gendor, interests);
  }
}

module.exports = Student;
