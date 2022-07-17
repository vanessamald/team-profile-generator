const generateManager = function(manager) {
    return `
<div class="col" >
    <div class="card text-bg-dark mb-3" style="max-width: auto;">
        <div class="card-body">${manager.name}</div>
        <div class="card-title text-center">Title</div>
        <div class="card-text text-center">${manager.id} </div>
        <div class="card-text text-center">${manager.email} </div>
        <div class="card-text text-center">${manager.officeNumber}</div>
    </div>
</div>
    `;
}

const generateMyTeam = function (myTeam) {
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
    ${myTeam}
    </main>
    <!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
</body>
</html>
    `;
}

module.exports = generateHtml;