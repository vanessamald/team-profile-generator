// require Employee constructor
const Intern = require('../lib/Intern');

// create Intern object
test('create the Intern object', () => {
    const intern = new Intern('Anthony', 1, 'anthony.test@gmail.com', 'UT');
    expect(intern.school).toEqual(expect.any(String));
});

// getSchool()
test('get Intern school', () => {
    const intern = new Intern('Anthony', 1, 'anthony.test@gmail.com', 'UT');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// getRole()
test('get Intern role', ()=> {
    const intern = new Intern('Anthony', 1, 'anthony.test@gmail.com', 'UT');
    expect(intern.getRole()).toEqual('Intern');
});