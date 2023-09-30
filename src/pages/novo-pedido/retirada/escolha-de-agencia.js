function initFuncionalidadesModalEscolhaAgencia() {
    const btnSelecionarAgencia = document.getElementById('btn-selecionar-agencia');
    btnSelecionarAgencia.addEventListener('click', function () {
        const inputAgenciaSelecionada = document.querySelector('#lista-agencias input:checked')
        console.log(inputAgenciaSelecionada)
        if(!inputAgenciaSelecionada) {
            return ;
        }
        const inputAgenciaId = document.getElementById('agenciaId');
        const selecionarAgenciaPlaceholder = document.getElementById('agencia-selecionada-placeholder')
    
        inputAgenciaId.value = inputAgenciaSelecionada.value;

        selecionarAgenciaPlaceholder.innerText = inputAgenciaSelecionada.labels[0].innerText
    });
}

export { initFuncionalidadesModalEscolhaAgencia }
