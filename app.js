let listaNumeros = [];
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let deNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);

    if (ateNumero >= deNumero) {
        for (let i = 0; i < quantidade; i++) {
            let numero = gerarNumeroAleatorio(deNumero, ateNumero);
            listaNumeros.push(numero);
        };
        mostrarNumeros();
    } else {
        alert('O número final deve ser maior que o número inicial');
    };
};

function gerarNumeroAleatorio(deNumero, ateNumero) {
    let numeroSorteado = Math.floor(Math.random() * (ateNumero - deNumero + 1) + deNumero);
    console.log(numeroSorteado);
    return numeroSorteado;
};

function mostrarNumeros() {
    let texto = `Números sorteados: ${listaNumeros.join(', ')}`;
    document.getElementById('texto_resultado').innerText = texto;
    listaNumeros = [];
    document.getElementById('btn-sortear').classList.replace('container__botao', 'container__botao-desabilitado');
    document.getElementById('btn-reiniciar').classList.replace('container__botao-desabilitado', 'container__botao');
};
