// require Employee constructor
const Employee = require('./Employee');

// create the Intern constructor
class Intern extends Employee {
    constructor (name, id, email, school) {
    super (name, id, email);
    this.school = school;
    }

// getSchool()
getSchool() {
    return this.school;
};

// getRole()
getRole() {
    return 'Intern';
};
}

module.exports = Intern;