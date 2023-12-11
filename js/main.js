    // Stockage des scores pour chaque joueur
    var scores = {
        player1Round: 0,
        player1Global: 0,
        player2Round: 0,
        player2Global: 0
    };

    // Fonction appelée lorsqu'un joueur lance le dé
    function rollDice(player) {
        // Générer un nombre aléatoire entre 1 et 6 (comme un dé standard)
        var diceResult = Math.floor(Math.random() * 6) + 1;

        // Si le résultat est 1, le joueur perd son score ROUND et c'est la fin de son tour
        if (diceResult === 1) {
            scores[player + 'Round'] = 0;
            document.getElementById(player + 'Round').textContent = scores[player + 'Round'];
            // Passer au tour de l'autre joueur
            switchPlayer();
        } else {
            // Ajouter le résultat au score ROUND du joueur
            scores[player + 'Round'] += diceResult;
            document.getElementById(player + 'Round').textContent = scores[player + 'Round'];
        }
    }

    // Fonction appelée lorsqu'un joueur décide de "Hold"
    function hold(player) {
        // Ajouter le score ROUND au score GLOBAL du joueur
        scores[player + 'Global'] += scores[player + 'Round'];
        document.getElementById(player + 'Global').textContent = scores[player + 'Global'];

        // Vérifier si le joueur a gagné
        if (scores[player + 'Global'] >= 100) {
            alert(player + ' a gagné !');
            // Réinitialiser le jeu
            resetGame();
        } else {
            // Réinitialiser le score ROUND du joueur
            scores[player + 'Round'] = 0;
            document.getElementById(player + 'Round').textContent = scores[player + 'Round'];
            // Passer au tour de l'autre joueur
            switchPlayer();
        }
    }

    // Stockage de l'identifiant du joueur actif
    var activePlayer = 'player1';

    // Fonction pour basculer entre les joueurs
    function switchPlayer() {
        // Réinitialiser le score ROUND du joueur actif à zéro
        scores[activePlayer + 'Round'] = 0;
        document.getElementById(activePlayer + 'Round').textContent = scores[activePlayer + 'Round'];

        // Basculer entre les joueurs
        activePlayer = (activePlayer === 'player1') ? 'player2' : 'player1';

        // Ajouter une classe pour indiquer visuellement le joueur actif
        document.querySelector('.col-md-5.player1').classList.toggle('active');
        document.querySelector('.col-md-5.player2').classList.toggle('active');

    }

    // Fonction pour réinitialiser le jeu
    function resetGame() {
        scores = {
            player1Round: 0,
            player1Global: 0,
            player2Round: 0,
            player2Global: 0
        };
        // Mettre à jour l'affichage des scores
        document.getElementById('player1Round').textContent = scores.player1Round;
        document.getElementById('player1Global').textContent = scores.player1Global;
        document.getElementById('player2Round').textContent = scores.player2Round;
        document.getElementById('player2Global').textContent = scores.player2Global;
    }