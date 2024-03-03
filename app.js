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
        if (ateNumero < deNumero) {
            alert('O número final deve ser maior que o número inicial');
        } else {
            alert('Preenchas os campos corretamente!')
        }
    };
};

function gerarNumeroAleatorio(deNumero, ateNumero) {
    let numeroSorteado = Math.floor(Math.random() * (ateNumero - deNumero + 1) + deNumero);

    if (listaNumeros.includes(numeroSorteado) && listaNumeros.length < (ateNumero - deNumero + 1)) {
        return gerarNumeroAleatorio(deNumero, ateNumero);
    }
    return numeroSorteado;
};

function mostrarNumeros() {
    let texto = `Números sorteados: ${listaNumeros.join(', ')}`;
    document.getElementById('texto_resultado').innerText = texto;
    listaNumeros = [];
    document.getElementById('btn-sortear').classList.replace('container__botao', 'container__botao-desabilitado');
    document.getElementById('btn-reiniciar').classList.replace('container__botao-desabilitado', 'container__botao');
};

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    let texto = `Números sorteados:  nenhum até agora`;
    document.getElementById('texto_resultado').innerText = texto;

    document.getElementById('btn-sortear').classList.replace('container__botao-desabilitado', 'container__botao');
    document.getElementById('btn-reiniciar').classList.replace('container__botao', 'container__botao-desabilitado');
}
