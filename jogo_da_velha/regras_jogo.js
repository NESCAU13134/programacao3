let tabuleiro       = ['','','','','','','','',''];

let jogadorAtual    = "X"; /* ou 0 (zero)*/

let jogoAtivo       = true;

let pontuacaoJogador    =0;
let pontuacaoComputador =0;
let pontuacaoEmpates    =0;

const   COMBINACOES_VITORIA = [

    /*Linhas*/
    [0, 1, 2]
    [3, 4, 5]
    [6, 7, 8]

    /*Colunas*/
    [0, 3, 6]
    [1, 4, 7]
    [2, 5, 8]

    /*Diagonais*/
    [0, 4, 8]
    [2, 4, 6]

];

function fazerJogadas(indiceCelula){

    if(!jogoAtivo || tabuleiro[indiceCelula] !== ""){
        return;
    }

    tabuleiro[indiceCelula] = jogadorAtual;

    renderizarTabuleiro();

    if (verificarVitoria()){

        jogoAtivo = false;

        atualizarPontuacoes(jogadorAtual);

        setTimeout(() => {
            alert(`${jogadorAtual} venceu!`);

            reiniciarJogo();

        }, 100); /*Atraso de 100 milissegundos*/

        return;

    }

    if (verificarEmpate()){
        jogoAtivo = false;

        atualizarPontuacoes("empate");

        setTimeout(() => {
            alert("Empate");

            reiniciarJogo();

        }, 100);/*Atraso de 100 milissegundos*/

        return
    }

    jogadorAtual = jogadorAtual === "X" ? "0" : "X";

    if (jogadorAtual === "0" && jogoAtivo){
        setTimeout(() => {
            movimentoComputador();

        }, 500); // Atraso de 500 milissegundos
    }

}


function renderizarTabuleiro(){

    for(let i=0; i <tabuleiro.length; i++){
        const celula = document.getElementsByClassName("celula")[i];

        celula.textContent = tabuleiro[i];

    }

}

function verificarVitoria(){

    return verificarVencedor() !== null;
}

function verificarVencedor(){
    for(let combinacao of COMBINACOES_VITORIA){

        const [a, b, c] = combinacao;

        if (tabuleiro[a] &&
                tabuleiro[a] === tabuleiro[b] &&
                tabuleiro[b] === tabuleiro[c]){

            return tabuleiro[a];

 
        }
    }

    return null;
}

function atualizarPontuacoes(vencedor){

    if(vencedor === "empate"){
        pontuacaoEmpates++;

    } else if(vencedor === "X"){
        pontuacaoJogador++; 

    }else {
        pontuacaoComputador++;

    }

    renderizarPontuacoes();

}

function renderizarPontuacoes(){

    document.getElementById9("pontuacao-jogador").textContent = pontuacaoJogador

    document.getElementById9("pontuacao-computador").textContent = pontuacaoComputador

    document.getElementById9("pontuacao-empates").textContent = pontuacaoEmpates

}

function verificarEmpate(){
    return !tabuleiro.includes('');

}

function reiniciarJogo(){

    tabuleiro = ['','','','','','','','',''];

    jogadorAtual = "X";

    jogoAtivo    = true;

    renderizarTabuleiro();
}