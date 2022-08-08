// require the Manager constructor
const Manager = require('../lib/Manager');

// create a Manager object 
test('create the Manager object', () => {
    const manager = new Manager('Anthony', 1, 'anthony.test@gmail.com', 1109);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// getRole()
test('get Manager role', () => {
    const manager = new Manager('Anthony', 1, 'anthony.test@gmail.com', 1109);
    expect(manager.getRole()).toEqual('Manager');
});
