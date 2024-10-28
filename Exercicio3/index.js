// Criar uma função que calcula o tempo restante, e recebedataFutura

const calcularTempoRestante = (dataFutura) => {
    const agora = new Date().getTime()
    const diferencaDeDatas = dataFutura - agora;
    
    const segundosDeUmMinuto = 60 * 1000;
    const segundosDeUmaHora = 60 * segundosDeUmMinuto;
    const segundosDoDia = 24 * segundosDeUmaHora;

    const dias = Math.floor(diferencaDeDatas / segundosDoDia);
    const horas = Math.floor((diferencaDeDatas / segundosDoDia) / segundosDeUmaHora);
    const minutos = Math.floor((diferencaDeDatas % segundosDeUmaHora) / segundosDeUmMinuto);
    const segundos = Math.floor((diferencaDeDatas % segundosDeUmMinuto) / 1000)   

    return {
        dias,
        horas,
        minutos,
        segundos
    }
}


// console.log(calcularTempoRestante(dataFutura))


//Funçao que atualiza o temporizador
const atualizarTemporizador = () => {
    const dataFutura = new Date('2024-12-31T23:59:50').getTime(); 
    const tempoRestante = calcularTempoRestante(dataFutura);
    
    document.getElementById('dias').innerText = `Dias ${tempoRestante.dias}`;
    document.getElementById('hora').innerText = `Horas ${tempoRestante.horas}`;
    document.getElementById('minutos').innerText = `Minutos ${tempoRestante.minutos}`;
    document.getElementById('segundos').innerText = `Segundos ${tempoRestante.segundos}`;

     
}
const intervalo = setInterval(atualizarTemporizador, 1000);

// atualizarTemporizador()