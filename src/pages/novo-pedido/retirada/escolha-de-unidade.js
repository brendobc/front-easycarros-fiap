function initFuncionalidadesModalEscolhaUnidade() {
    const btnSelecionarUnidade = document.getElementById('btn-selecionar-unidade');
    btnSelecionarUnidade.addEventListener('click', function () {
        const inputUnidadeSelecionada = document.querySelector('#lista-unidades input:checked')
        console.log(inputUnidadeSelecionada)
        if(!inputUnidadeSelecionada) {
            return ;
        }
        const inputUnidadeId = document.getElementById('unidadeId');
        const selecionarUnidadePlaceholder = document.getElementById('unidade-selecionada-placeholder')
    
        inputUnidadeId.value = inputUnidadeSelecionada.value;

        selecionarUnidadePlaceholder.innerText = inputUnidadeSelecionada.labels[0].innerText
    });
}

export { initFuncionalidadesModalEscolhaUnidade }
