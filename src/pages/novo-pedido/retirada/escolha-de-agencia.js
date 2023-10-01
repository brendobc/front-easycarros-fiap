const lista = document.getElementById('lista-agendamento');

// TODO JSDoc
// TODO completar função
function criarCardAgendamento(agendamento) {
    const labelAgendamento = document.createElement('label');

    labelAgendamento.innerHTML = `
        <input name="agendamento" type="radio" value="${agendamento.toString()}">
        ${agendamento.toLocaleDateString('pt-BR')} - ${agendamento.getHours()}:${agendamento.getMinutes()}
    `;

    return labelAgendamento;
}

function carregarAgendamentosDisponíveis() {
    const fragment = document.createDocumentFragment();

    for(const agendamento of getAgendamentosDisponiveis()) {
        fragment.appendChild(criarCardAgendamento(agendamento));
    }

    listaAgendamento.innerHTML = '';
    listaAgendamento.appendChild(fragment);
}

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
