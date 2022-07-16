// require the Engineer constructor
const Engineer = require('../lib/Engineer');

// create an Engineer object
test('create the Engineer object', () => {
    const engineer = new Engineer('Anthony', 1, 'anthony.test@gmail.com', 'anthonytest');
    expect(engineer.github).toEqual(expect.any(String));
});

// getGithub()
test('get Engineer github', () => {
    const engineer = new Engineer('Anthony', 1, 'anthony.test@gmail.com', 'anthonytest');
    expect(engineer.getGitHub()).toContain(engineer.github.toString()); 
});

// getRole()
test('get Engineer', () => {
    const engineer = new Engineer('Anthony', 1, 'anthony.test@gmail.com', 'anthonytest');
    expect(engineer.getRole()).toEqual('Engineer');
});