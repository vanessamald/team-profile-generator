const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const generateHtml = require('./src/generateHTML');

const teamArray = [];

const addingEmployee = () => {
    inquirer.prompt ([
    {
        type: 'checkbox',
        name: 'role',
        message: "Choose the employee's role",
        choices: ['Engineer', 'Intern', 'Manager', 'Done adding employees'],
    }
    ])
    .then(answers => {
        const  userRole  = answers.role;
        
        console.log(userRole);
        //const { answers } = answers.role;
        if (userRole == 'Manager') {
         addingManager();
    }
        if (userRole == 'Intern') {
        addingIntern();
    }
        if (userRole == 'Engineer') {
        addingEngineer();
    }
        if (userRole == 'Done adding employees') {
        generateTeam();
    }
        if (userRole == 'Manager' && userRole == 'Intern' && userRole == 'Engineer') {
            addingManager();
            addingIntern();
            addingEngineer();
        }
    })
};

const addingManager = () => {
    inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the manager for this team?',
        validate: name => {
            if (name) {
                return true;
            } else {
                return 'Please enter a name';
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's ID?",
        validate: id => {
            if (id) {
                return true;
            } else {
                return 'Please enter an ID';
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email?",
        validate: email => {
            if (email) {
                return true;
            } else {
                return 'Please enter an email';
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?",
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            } else {
                return 'Please enter an office number';
            }
        }
    }
])
.then(answers => {
    const { name, id, email, officeNumber } = answers;
    teamArray.push(new Manager(name, id, email, officeNumber));
    addingEmployee();
})

};

const addingIntern = () => {
    inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'Please provide the name of the intern',
        validate: name => {
            if (name) {
                return true;
            } else {
                return 'Please enter a name';
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please provide the ID number for the intern',
        validate: id => {
            if (id) {
                return true;
            } else {
                return 'Please enter an ID';
            }
        }
    },
    {
        type:'input',
        name: 'email',
        message: 'Please provide an email for the intern',
        validate: email => {
            if (email) {
                return true;
            } else {
                return 'Please enter an email';
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please provide an office number',
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            } else {
                return 'Please enter an office number';
            }
        }   
    }])
    .then(answers => {
        const { name, id, email, officeNumber } = answers
        console.log(answers);
        teamArray.push(new Intern(name, id, email, officeNumber));
        addingEmployee();
    })
    
};

const addingEngineer = () => {
    inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'Please provide the name of the engineer',
        validate: name => {
            if (name) {
                return true;
            } else {
                return 'Please enter a name';
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please provide the ID number for the engineer',
        validate: id => {
            if (id) {
                return true;
            } else {
                return 'Please enter an ID';
            }
        }
    },
    {
        type:'input',
        name: 'email',
        message: 'Please provide an email for the engineer',
        validate: email => {
            if (email) {
                return true;
            } else {
                return 'Please enter an email';
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please provide an office number',
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            } else {
                return 'Please enter an office number';
            }
        }  
    }])
    .then (answers => {
        const { name, id, email, officeNumber } = answers;
        teamArray.push(new Engineer(name, id, email, officeNumber));
        addingEmployee();
    })
    
};

const createProfile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your team profile has been created at index.html!');
        }
    })
}

/*
const generateTeam = () => {
    console.log(teamArray);

    teamArray => {
        const html = generateHtml(teamArray);
        createProfile(html);
    } 
};
*/

const generateTeam = () => {
    console.log(teamArray);
    const html = generateHtml(teamArray);
    createProfile(html);
}

addingEmployee();
