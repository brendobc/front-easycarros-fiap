import { Pedido } from "../../model/Pedido.js";
import { criarPedido } from "../../service/novoPedidoService.js";
import { salvarPedido } from "../../service/storage.js";

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
          inputAgendamentoSelecionado = document.getElementById('agendamento'),
          selectCategoriaPedido = document.getElementById('select-categoria-pedido');

    $('#form-novo-pedido').validate({
        ignore: ['hidden'],
        submitHandler: function(form, e) {
            e.preventDefault();

            if(
                [
                    selectCategoriaPedido.value === Pedido.Categoria.DELIVERY ||
                        validarCampoHiddenComModal(inputAgenciaSelecionada, btnSelecionarAgencia),
                    validarCampoHiddenComModal(inputAgendamentoSelecionado, btnSelecionarAgendamento)
                ]
                .includes(false)
            ) {
                return;
            }

            salvarPedido(criarPedido(form));
        }
    });
}

function initValidacaoNovoPedido() {
    inserirValidadorFormNovoPedido();
}

export { initValidacaoNovoPedido }