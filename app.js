listaNumeros = [];
function sortear() {
    quantidade = document.getElementById('quantidade').value;
    doNumero = document.getElementById('de').value;
    ateNumero = document.getElementById('ate').value;

    if (ateNumero >= doNumero) {
        for (i = 0; i < quantidade; i++) {
            numero = gerarNumeroAleatorio(doNumero, ateNumero);
            listaNumeros.push(numero);
        };
    alert(listaNumeros);
    mostrarNumeros();
    } else {
        alert('O número final deve ser maior que o número inicial');
    };
};

function gerarNumeroAleatorio(deNumero, ateNumero) {
    return parseInt(Math.random() * (ateNumero - deNumero + 1) + deNumero);
};

function mostrarNumeros() {
    texto = "Números sorteados: ";
    texto += listaNumeros.join(', ');
    document.getElementById('resultado').innerText = texto;
    listaNumeros = [];
};
