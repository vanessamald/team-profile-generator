const createManager = function(manager) {
    return `
<div class="col" >
    <div class="card text-bg-dark mb-3" style="max-width: auto;">
        <div class="card-body">${manager.name}</div>
        <div class="card-title text-center">Manager</div>
        <div class="card-text text-center">ID: ${manager.id} </div>
        <div class="card-text text-center">Email: <a href="mailto:${manager.email}">${manager.email}</a></div>
        <div class="card-text text-center">Office Number: ${manager.officeNumber}</div>
    </div>
</div>
    `;
}

const createIntern = function(intern) {
    return `
<div class="col" >
    <div class="card text-bg-dark mb-3" style="max-width: auto;">
        <div class="card-body">${intern.name}</div>
        <div class="card-title text-center">Intern</div>
        <div class="card-text text-center">ID: ${intern.id} </div>
        <div class="card-text text-center">Email: <a href="mailto:${intern.email}">${intern.email}</a></div>
        <div class="card-text text-center">School: ${intern.school}</div>
    </div>
</div>
    `;
}

const createEngineer = function(engineer) {
    return `
<div class="col" >
    <div class="card text-bg-dark mb-3" style="max-width: auto;">
        <div class="card-body">${engineer.name}</div>
        <div class="card-title text-center">Engineer</div>
        <div class="card-text text-center">ID: ${engineer.id} </div>
        <div class="card-text text-center">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></div>
        <div class="card-text text-center">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></div>
    </div>
</div>
    `;
}

generateHTML = function(team) {
    let myTeam = [];

    for (let i = 0; i < team.length; i++) {
        const employee = team[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerInfo = createManager(employee);

            myTeam.push(managerInfo);
        }
        if (role === 'Intern') {
            const internInfo = createIntern(employee);

            myTeam.push(internInfo);
        }
        if (role === 'Engineer') {
            const engineerInfo = createEngineer(employee);

            myTeam.push(engineerInfo);
        }
        
    }
    //return createMyTeam(myTeam);
    const teamInfo = myTeam.join('');

    const generateTeam = createMyTeam(teamInfo);
    return generateTeam;
    //return createMyTeam(myTeam);
}

const createMyTeam = function (teamInfo) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    
</head>
<body>
    <header class="text-center display-1">
        My Team
    </header>
    <main>
    <div class="row row-cols-1 row-cols-md-2 g-4 m-3"></div>
    <!--Team Profiles-->
    ${teamInfo}
    </main>
    <!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
</body>
</html>
    `;
}

module.exports = generateHTML;