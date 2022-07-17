// require the Employee constructor
const Employee = require('./Employee');

// create the Manager constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
    super (name, id, email);
    this.officeNumber = officeNumber;
    }

// getRole()
getRole() {
    return 'Manager';
}
}

module.exports = Manager;