<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/betaTest.css">
    <script src="../script/betaTest.js" defer></script>
    <title>Accueil</title>
</head>
<body>
    <header>
        <div class="logo">
            <a href="index.php"><img src="favpng_logo-tic-tac-ultimate-tic-tac-toe-font.png" alt="Logo"></a>
        </div>
        <div class="login">
            <form action="log.php" method="POST" autocomplete="off">
                <input type="text" name="use" id="user" placeholder="user">
                <input type="password" name="pass" id="password" placeholder="password">
                <input class='submit' type="submit" value="Login">
            </form>
        </div>
    </header>
    <main>
        <div class="container">
            <form class="mode" action="" method="post">
                <label for="">Nom du joueur 1 :</label>
                <input type="text" name="" id="" required>
                <label for="">Nom du joueur 2 :</label>
                <input type="text" name="" id="" required>
                <label for="">Nombre de parties</label>
                <input type="number" name="" id="" min="1" max="10" required>
                <label for="">Joueur vs ?</label>
                <select name="pets" id="pet-select" required>
                    <option value="">Un vs Ordinaeur</option>
                    <option value="dog">Un vs Un</option>
                </select>
                <button type="submit">Jouer</button>
            </form>
        </div>
    </main>
</body>
</html>