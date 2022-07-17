const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const addingEmployee = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Choose the employee's role",
            choices: ['Engineer', 'Intern', 'Manager']
        }
    ])
.then(answers => {
    if ( answers == 'Manager')
    return addingManager();
})
}

const addingManager = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager for this team?',
            //validate: 
        }
    ],
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
})
}