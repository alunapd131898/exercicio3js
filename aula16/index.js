function Chamar(segundosDeAtraso) {
    console.log(`Atrasou ${segundosDeAtraso} segundos`) 
}
 function chamaAtrasado(funcaoDeAtraso, quantidadeAtraso) {
     setTimeout(() => funcaoDeAtraso(quantidadeAtraso), quantidadeAtraso * 1000)
    //setTimeout:atrasar a chamada de uma função
}

chamaAtrasado(Chamar, 1)

function chamarComIntervalo(funcaoDeIntervalo, intervalo) {
    setInterval(() => funcaoDeIntervalo(intervalo), intervalo * 1000)
}
chamarComIntervalo(Chamar, 2)