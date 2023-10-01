import { Agencia } from "../../model/Agencia.js";
import { agenciasDisponiveis } from "../../service/AgenciaService.js";

const listaAgencias = document.getElementById('lista-agencias');

/**
 * @param {Agencia} agencia 
 * @returns {HTMLLabelElement}
 */
function criarCardAgencia(agencia) {
    const labelAgencia = document.createElement('label');

    labelAgencia.innerHTML = `
        <input name="agencia" type="radio" value="${agencia.id}">
        ${agencia.id} - ${agencia.nome}
    `;

    return labelAgencia;
}

function carregarAgenciasDisponíveis() {
    const fragment = document.createDocumentFragment();

    for(const agencia in agenciasDisponiveis) {
        fragment.appendChild(criarCardAgencia(agenciasDisponiveis[agencia]));
    }

    listaAgencias.innerHTML = '';
    listaAgencias.appendChild(fragment);
}

function initFuncionalidadesModalEscolhaAgencia() {
    const btnSelecionarAgencia = document.getElementById('btn-selecionar-agencia'),
          btnAbrirModalSelecaoAgencia = document.querySelector('[data-selecionar="agencia"]');

    btnSelecionarAgencia.addEventListener('click', function () {
        const inputAgenciaSelecionada = document.querySelector('#lista-agencias input:checked');
        
        if(!inputAgenciaSelecionada) {
            return;
        }

        const inputAgenciaId = document.getElementById('agenciaId');
        const selecionarAgenciaPlaceholder = document.getElementById('agencia-selecionada-placeholder');
    
        inputAgenciaId.value = inputAgenciaSelecionada.value;

        selecionarAgenciaPlaceholder.innerText = inputAgenciaSelecionada.labels[0].innerText;
    });

    btnAbrirModalSelecaoAgencia.addEventListener('click', carregarAgenciasDisponíveis);
}

export { initFuncionalidadesModalEscolhaAgencia }
