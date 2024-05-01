f/ Função para gerar um número aleatório entre min e max (inclusive)
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função principal do jogo de adivinhação
function jogoAdivinhacao() {
    var numeroSecreto = gerarNumeroAleatorio(1, 100);
    var tentativas = 0;
    var maxTentativas = 10;

    alert("Bem-vindo ao jogo de adivinhação!\nTente adivinhar o número secreto entre 1 e 100.");

    while (tentativas < maxTentativas) {
        var tentativa = parseInt(prompt("Digite sua tentativa:"));

        if (isNaN(tentativa)) {
            alert("Por favor, insira um número válido.");
            continue;
        }

        if (tentativa < numeroSecreto) {
            alert("O número secreto é maior.");
        } else if (tentativa > numeroSecreto) {
            alert("O número secreto é menor.");
        } else {
            alert("Parabéns! Você acertou o número secreto: " + numeroSecreto);
            return;
        }

        tentativas++;
        var tentativasRestantes = maxTentativas - tentativas;
        alert("Tentativas restantes: " + tentativasRestantes);
    }

    alert("Fim de jogo! O número secreto era: " + numeroSecreto);
}

// Iniciar o jogo quando a página carregar
window.onload = function() {
    jogoAdivinhacao();
};