const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const acceleration = 10;

function go(keyCode) {
    let x, y;

    switch (keyCode) {
        case 37:
            x = -1;
            break;
        case 39:
            x = 1;
            break;
        case 38:
            y = -1;
            break;
        case 40:
            y = 1;
            break;
    }

    if (player.style.left.length === 0 || player.style.top.length === 0) {
        player.style.left = !!x ? x * acceleration + "px" : "0px";
        player.style.top = !!y ? y * acceleration + "px" : "0px";
    } else {
        player.style.left = !!x && parseInt(player.style.left) + x * acceleration + "px";
        player.style.top = !!y && parseInt(player.style.top) + y * acceleration + "px";
    }
}

document.addEventListener('keydown', function(event){
    go(event.keyCode)
});
console.dir(enemy)
enemy.style.left = window.innerWidth / 2 - enemy.clientWidth / 2 + "px";
enemy.style.top = window.innerHeight / 2 - enemy.clientHeight / 2 + "px";

function move(){
    const x = Math.random() + -.5,
        y = Math.random() + -.5,
        distance = Math.random() * 400;

    enemy.style.left = parseInt(enemy.style.left) + x * distance + "px";
    enemy.style.top = parseInt(enemy.style.top) + y * distance + "px";
}

move();
setInterval(move, 500);