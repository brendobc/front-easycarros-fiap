function inserirListenerPrevisaoDevolucao() {
    const inputDiasLocacao = document.getElementById('dias-locacao'),
          placeholderPrevisaoDevolucao = document.getElementById('previsao-devolucao-placeholder');

    inputDiasLocacao.addEventListener('input', function atualizaPrevisaoDevolucao() {
        // TODO implementar função
    });
}

function initSelecaoPeriodoLocacao() {
    inserirListenerPrevisaoDevolucao();
}

export { initSelecaoPeriodoLocacao }