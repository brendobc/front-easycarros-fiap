import { Pedido } from "../../model/Pedido.js";
import { salvarPedido } from "../../service/storage.js";
import { setFirstDeepAttributeFound } from "../../utils/attribute-setter.js";

/**
 * Cria um objeto Pedido com os dados do formulário de novo pedido
 * @param {HTMLFormElement} formNovoPedido
 * @returns {Pedido}
 */
function criarPedidoComBaseNoForm(formNovoPedido) {
    const pedido = Pedido.criarInstanciaObjetosPreenchidos();
    for(const [name, value] of new FormData(formNovoPedido).entries()) {
        setFirstDeepAttributeFound(pedido, name, value);
    }

    return pedido;
}

function validarCampoHiddenComModal(input, btnAbrirModal) {
    if(
        !input ||
        input.value &&
        !btnAbrirModal.classList.remove('error')
    ) {
        return true;
    }

    btnAbrirModal.classList.add('error');
    return false;
}

function inserirValidadorFormNovoPedido() {
    const btnSelecionarAgencia = document.querySelector('[data-selecionar="agencia"]'),
          inputAgenciaSelecionada = document.getElementById('agenciaId'),
          btnSelecionarAgendamento = document.querySelector('[data-selecionar="agendamento"]'),
          inputAgendamentoSelecionado = document.getElementById('agendamento');

    $('#form-novo-pedido').validate({
        ignore: ['hidden'],
        submitHandler: function(form, e) {
            e.preventDefault();

            if(
                [
                    validarCampoHiddenComModal(inputAgenciaSelecionada, btnSelecionarAgencia),
                    validarCampoHiddenComModal(inputAgendamentoSelecionado, btnSelecionarAgendamento)
                ]
                .includes(false)
            ) {
                return;
            }

            salvarPedido(criarPedidoComBaseNoForm(form));
        }
    });
}

function initValidacaoNovoPedido() {
    inserirValidadorFormNovoPedido();
}

export { initValidacaoNovoPedido }