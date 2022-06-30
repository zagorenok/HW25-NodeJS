const Teacher = require('./teacher');
const Student = require('./student');

const teacher = new Teacher('Mila', 28, 'female', 'like books', 'english');
const student = new Student('Bob', 22, 'male', 'like sport');
console.log(teacher);
console.log(student);
