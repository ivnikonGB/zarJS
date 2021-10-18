const player1 = {
    player: 1,
    name: 'Subzero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: [
        'weapon1',
        'weapon2',
        'weapon3',
    ],
    attack: function() {
        console.log(this.name + ' Fight...');
    }
}

const player2 = {
    player: 2,
    name: 'Liu Kang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: [
        'weapon5',
        'weapon6',
        'weapon7',
    ],
    attack: function() {
        console.log(this.name + ' Fight...');
    }
}

const $root = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

function createElement(tag, className) {
    $tag = document.createElement(tag);
    if(className) {
        $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer(playerObject) {
    const $player = createElement('div', 'player' + playerObject.player);
    const $progressBar = createElement('div', 'progressbar');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $character = createElement('div', 'character');
    const $img = createElement('img');

    $player.appendChild($progressBar);
    $player.appendChild($character);
    $progressBar.appendChild($life);
    $progressBar.appendChild($name);
    $character.appendChild($img);

    $name.innerText = playerObject.name;
    $img.src = playerObject.img;

    $life.style.width = playerObject.hp + '%';

    return $player;
}

function getRandomNumber() {
    return Math.ceil(Math.random() * 20);
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');

    player.hp -= getRandomNumber();
    player.hp = player.hp < 0 ? 0 : player.hp;
    $playerLife.style.width = player.hp + '%';
    
    return player.hp === 0 ? false : true;
}

function playerWin(name) {
    const $loseTitle = createElement('div', 'loseTitle');

    $loseTitle.innerText = name + ' win';
    $root.appendChild($loseTitle);
    $randomButton.disabled = true;
}

$randomButton.addEventListener('click', function () {
    if(!changeHP(player1)){
        playerWin(player2.name);     
    } else if (!changeHP(player2)) {
        playerWin(player1.name);
    }
})

$root.appendChild(createPlayer(player1));
$root.appendChild(createPlayer(player2));


