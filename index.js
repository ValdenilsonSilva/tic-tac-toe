const jogador1 ='fa-times';
const jogador2 ='fa-circle-o';
let elements = document.querySelectorAll('.jogada');
const currentplayer = document.getElementById('currentplayer'); 
const reset = document.getElementById('reset'); 
let endgame = false;
var empate = false;
let toggle = false;

var nIntervId;

reset.addEventListener('click', function(){
    window.location.reload();
});

elements.forEach((item) => {
    item.addEventListener('click', () => jogada(item));
})

function jogada(item) {
    if (item.firstElementChild) return;
    if (endgame) return;
    const jogada = toggle ? jogador2: jogador1;
    const proximajogada = !toggle ? jogador2: jogador1;
    const html = `<i class="fa ${jogada}" aria-hidden="true"></i>`;
    item.innerHTML = html;
    currentplayer.innerHTML = `<p> VEZ DO JOGADOR: <i class="fa ${proximajogada}" aria-hidden="true"></i></p>`;
    toggle = !toggle;
    

    nIntervId = setTimeout(function () {
        gameOver(jogada);
    }, 100);
    
}




function vencedor(cel1, cel2, cel3, jogada){
    if (elements[cel1].firstElementChild && elements[cel2].firstElementChild && elements[cel3].firstElementChild) {
        if (elements[cel1].firstElementChild.className.includes(jogada) &&
        elements[cel2].firstElementChild.className.includes(jogada) &&
        elements[cel3].firstElementChild.className.includes(jogada)) {
            return true;
        }
    }
    return false;
}

function gameOver(jogada){
    clearInterval(nIntervId);
    if (
        vencedor(0,1,2, jogada) ||
        vencedor(3,4,5, jogada) ||
        vencedor(6,7,8, jogada) ||
        vencedor(0,3,6, jogada) ||
        vencedor(1,4,7, jogada) ||
        vencedor(2,5,8, jogada) ||
        vencedor(0,4,8, jogada) ||
        vencedor(2,4,6, jogada) 
    ) {
            const html = `<i class="fa ${jogada}" aria-hidden="true"></i>`;
            currentplayer.innerHTML = `<p>Jogador ${html} venceu</p>`;
            endgame = true;
            return;
    }

    let existJogada = [];
    elements.forEach((item) => {
        existJogada.push(!item.firstElementChild);
    });

    if (existJogada.find((item) => item) == undefined) {
        currentplayer.innerHTML = `<p>Deu velha!</p>`;
        endgame = true;
        return;
    }
}