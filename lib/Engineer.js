// require Employee constructor
const Employee = require('./Employee');

// Engineer constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
    super(name, id, email);
    this.github = github;
    }


// getGithub()
getGitHub() {
    return this.github;
};

// getRole()
getRole() {
    return 'Engineer';
    }
};

module.exports = Engineer;