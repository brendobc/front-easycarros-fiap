import { getAgendamentosDisponiveis } from "../../service/novoPedidoService.js";
import { validarCampoHiddenComModal } from "./validar-form-novo-pedido.js";

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
        const inputAgendamento = document.querySelector('#lista-agendamento input:checked'),
              inputAgendamentoId = document.getElementById('agendamento'),
              labelErroAgendamento = document.getElementById('label-erro-agendamento'),
              agendamentoPlaceholder = document.getElementById('agendamento-selecionado-placeholder');
        
        inputAgendamentoId.value = inputAgendamento ? inputAgendamento.value : null;
        agendamentoPlaceholder.innerText = inputAgendamento ? inputAgendamento.labels[0].innerText : null;

        validarCampoHiddenComModal(inputAgendamentoId, btnAbrirModalSelecaoAgendamento, labelErroAgendamento);
    });

    btnAbrirModalSelecaoAgendamento.addEventListener('click', carregarAgendamentosDisponíveis);
}

export { initFuncionalidadesModalAgendamento }