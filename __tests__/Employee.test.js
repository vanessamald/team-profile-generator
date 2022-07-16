// require the Employee constructor
const Employee = require('../lib/Employee');

// create the Employee object
test('creates employee object', () => {
    const employee = new Employee('Anthony', 1, 'anthony.test@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// get name 
test('get employee name', () => {
    const employee = new Employee('Anthony', 1, 'anthony.test@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

// get id
test('get employee id', () => {
    const employee = new Employee('Anthony', 1, 'anthony.test@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

// get email
test('get employee email', () => {
    const employee = new Employee('Anthony', 1, 'anthony.test@gmail.com');
    expect(employee.getEmail()).toContain(employee.email.toString());
});

// get role
test('get employee role', () => {
    const employee = new Employee('Anthony', 1, 'anthony.test@gmail.com');
    expect(employee.getRole()).toEqual('Employee');
});


