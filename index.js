const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const generateHtml = require('./src/generateHTML');

const addingEmployee = () => {
    inquirer.prompt ([
    {
        type: 'checkbox',
        name: 'role',
        message: "Choose the employee's role",
        choices: ['Engineer', 'Intern', 'Manager']
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
    })
};

const addingManager = () => {
    inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the manager for this team?',
        //validate: 
    }],
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's ID?",
        //validate: 
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email?",
        //validate:
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?",
        //validate: 
    }
    )
.then(answers => {
    const { name, id, email, officeNumber } = answers;
})};

const addingIntern = () => {
    inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'Please provide the name of the intern'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please provide the ID number for the intern',
        //validate:
    },
    {
        type:'input',
        name: 'email',
        message: 'Please provide an email for the intern'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please provide an office number'   
    }])
};

const addingEngineer = () => {
    inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'Please provide the name of the engineer'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please provide the ID number for the engineer',
        //validate:
    },
    {
        type:'input',
        name: 'email',
        message: 'Please provide an email for the engineer'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please provide an office number'   
    }])
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

addingEmployee();
