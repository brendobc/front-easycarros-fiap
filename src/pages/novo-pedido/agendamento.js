import { getAgendamentosDisponiveis } from "../../service/novoPedidoService.js";

const listaAgendamento = document.getElementById('lista-agendamento');

// TODO JSDoc
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

function initFuncionalidadesModalAgendamento() {
    const btnSelecionarAgendamento = document.getElementById('btn-selecionar-agendamento'),
          btnAbrirModalSelecaoAgendamento = document.querySelector('[data-selecionar="agendamento"]');

    btnSelecionarAgendamento.addEventListener('click', function() {
        const inputAgendamento = document.querySelector('#lista-agendamento input:checked');

        if(!inputAgendamento) {
            return;
        }
        
        const inputAgendamentoId = document.getElementById('agendamento');
        const agendamentoPlaceholder = document.getElementById('agendamento-selecionado-placeholder');
        inputAgendamentoId.value = inputAgendamento.value;

        agendamentoPlaceholder.innerText = inputAgendamento.labels[0].innerText;
    });

    btnAbrirModalSelecaoAgendamento.addEventListener('click', carregarAgendamentosDisponíveis);
}

export { initFuncionalidadesModalAgendamento }