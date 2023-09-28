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

function inserirValidadorFormNovoPedido() {
    // TODO completar validações
    $('#form-novo-pedido').validate({
        ignore: ['hidden'],
        submitHandler: function(form, e) {
            e.preventDefault();

            salvarPedido(criarPedidoComBaseNoForm(form));
        }
    });
}

function initValidacaoNovoPedido() {
    inserirValidadorFormNovoPedido();
}

export { initValidacaoNovoPedido }