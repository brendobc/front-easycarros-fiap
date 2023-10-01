function inserirListenerPrevisaoDevolucao() {
    const inputDiasLocacao = document.getElementById('dias-locacao'),
          placeholderPrevisaoDevolucao = document.getElementById('previsao-devolucao-placeholder');

    inputDiasLocacao.addEventListener('input', function atualizaPrevisaoDevolucao() {
        // Obter o valor do campo de dias
        const diasLocacao = parseInt(this.value, 10);

        // Obter a data e hora atuais
        const dataAtual = new Date();

        // Somar o número de dias ao valor atual
        dataAtual.setDate(dataAtual.getDate() + diasLocacao);

        // Formatar a data e hora para exibição
        const dataFormatada = `${dataAtual.toLocaleDateString()} ${dataAtual.toLocaleTimeString()}`;

        // Exibir o resultado na div
        placeholderPrevisaoDevolucao.innerText = `Você devolverá o carro no dia: ${dataFormatada}`;
    });
}

function initSelecaoPeriodoLocacao() {
    inserirListenerPrevisaoDevolucao();
}

export { initSelecaoPeriodoLocacao }