function chamaPrimeiro() {
    console.log('chama essa primeiro')
}

function chamaDepois() {
    console.log('entrou na segunda funcao')
    chamaPrimeiro();
}


function recebePrimeira(primeiraFuncao) {
    primeiraFuncao()
}

recebePrimeira(chamaDepois);

