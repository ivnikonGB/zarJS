const subzero = {
    name: 'Subzero',
    hp: 100,
    img: 'image1.jpg',
    weapon: [
        'weapon1',
        'weapon2',
        'weapon3',
    ],
    attack: function() {
        console.log(this.name + ' Fight...');
    }
}

const liuKang = {
    name: 'Liu Kang',
    hp: 80,
    img: 'image2.jpg',
    weapon: [
        'weapon5',
        'weapon6',
        'weapon7',
    ],
    attack: function() {
        console.log(this.name + ' Fight...');
    }
}

function createPlayer() {
    const $root = document.querySelector('.arenas');
    const $player = document.createElement('div');
    const $progressBar = document.createElement('div');
    const $life = document.createElement('div');
    const $name = document.createElement('div');
    const $character = document.createElement('div');
    const $img = document.createElement('img');

    $player.classList.add('player1');
    $progressBar.classList.add('progressBar');
    $life.classList.add('life');
    $name.classList.add('name');
    $character.classList.add('character');

    $player.appendChild($progressBar);
    $player.appendChild($character);
    $progressBar.appendChild($life);
    $progressBar.appendChild($name);
    $character.appendChild($img);

    $name.innerText = 'Liu Kang';
    $img.src = 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif';

    $life.style.width = '100%';

    $root.appendChild($player);
}


