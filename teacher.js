const Person = require('./person');

class Teacher extends Person {
  constructor(name, age, gendor, interests, subject) {
    super(name, age, gendor, interests);
    this.subject = subject;
  }
}

module.exports = Teacher;


