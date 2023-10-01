import { Pedido } from "../../model/Pedido.js";
import { criarPedido } from "../../service/novoPedidoService.js";
import { salvarPedido } from "../../service/storage.js";

const btnSelecionarAgencia = document.querySelector('[data-selecionar="agencia"]'),
      inputAgenciaSelecionada = document.getElementById('agenciaId'),
      labelErroAgencia = document.getElementById('label-erro-agencia'),
      btnSelecionarAgendamento = document.querySelector('[data-selecionar="agendamento"]'),
      inputAgendamentoSelecionado = document.getElementById('agendamento'),
      labelErroAgendamento = document.getElementById('label-erro-agendamento'),
      selectCategoriaPedido = document.getElementById('select-categoria-pedido'),
      formNovoPedido = document.getElementById('form-novo-pedido');

function validarCampoHiddenComModal(input, btnAbrirModal, labelErro, force = false) {
    if(
        force ||
        !input ||
        input.value
    ) {
        btnAbrirModal.classList.remove('error');
        labelErro.style.display = 'none';
        return true;
    }

    btnAbrirModal.classList.add('error');
    labelErro.style.display = 'block';
    return false;
}

function validarCategoriaCarro(form, force = false) {
    const radiosCategoria = form.querySelectorAll('[name="categoria"]'),
          labelCategoriaError = form.querySelector('#categoria-error');

    if(
        force ||
        Array.prototype.filter.call(radiosCategoria, (radio) => {
            radio.classList.remove('error')
            return radio.checked;
        }).length === 1
    ) {
        labelCategoriaError.style.display = 'none';
        return true;
    }

    Array.prototype.find.call(radiosCategoria, (radio) => radio.classList.add('error'));
    labelCategoriaError.style.display = 'block';
    labelCategoriaError.innerText = 'É preciso selecionar ao menos uma categoria';
    return false;
}

function validarCampos(force = false) {
    return [
        selectCategoriaPedido.value === Pedido.Categoria.DELIVERY ||
            validarCampoHiddenComModal(inputAgenciaSelecionada, btnSelecionarAgencia, labelErroAgendamento, force),
        validarCampoHiddenComModal(inputAgendamentoSelecionado, btnSelecionarAgendamento, labelErroAgencia, force),
        validarCategoriaCarro(formNovoPedido, force)
    ]
    .includes(false);
}

function inserirValidadorFormNovoPedido() {
    $(formNovoPedido).validate({
        submitHandler: function(_form, e) {
            e.preventDefault();

            if(validarCampos()) {
                return;
            }

            salvarPedido(criarPedido(formNovoPedido));
            window.location.href = './acompanhamento.html';
        }
    });
}

function initValidacaoNovoPedido() {
    inserirValidadorFormNovoPedido();
}

export { initValidacaoNovoPedido, validarCampos, validarCampoHiddenComModal }