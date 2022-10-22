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
            <div class="mode">
                <form class="mode-form">
                    <h2>Choisis ton mode de jeu</h2>
                    <label for="" class="required">Nom du joueur 1 :</label>
                    <input type="text" name="" id="player-one" value="Joueur" required>
                    <label for="" class="required">Nom du joueur 2 :</label>
                    <input type="text" name="" id="player-two" value="Computer" required>
                    <label for="" class="required">Nombre de parties</label>
                    <input type="number" name="" id="nb-game" min="1" max="10" value="1" required>
                    <label for="" class="required">Joueur vs ? </label>
                    <select name="pets" id="pet-select" required>
                        <option value="OneVsOne">Un vs Un</option>
                        <option value="OneVsComputer">Un vs Ordinaeur</option>
                    </select>
                </form>
                <button class="mode-btn">Jouer</button>
            </div>
        </div>
        <div class="container-ovo">
            <h2 class="title"></h2>
            <div class="score">
            <div class="playerX" id="scorePX"></div>
                <div>Score</div>
                <div class="playerO" id="scorePO"></div>
            </div>
            <div class="next-player"></div>
            <div class="grid">
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
                <div class="case"></div>
            </div>
            <div class="announcer"></div>
            <div class="container-reset">
                <div class="shot">Nombre de coups restants : <span class="shots-remaining"></span></div>
                <button class="reset">Nouvelle partie</button>
            </div>
        </div>
    </main>
</body>

</html>